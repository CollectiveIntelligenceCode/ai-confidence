import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { Client as HubSpotClient } from '@hubspot/api-client';
import { FilterOperatorEnum } from '@hubspot/api-client/lib/codegen/crm/contacts/models/Filter';

export async function POST(req: NextRequest) {
  const { name, email, organisation, role, companySize, variant } = await req.json();

  if (!name || !email) {
    return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
  }

  const variantLabels: Record<string, string> = {
    cohort: 'AI Confidence Digital Cohort',
    leaders: 'AI Confidence for Leaders',
    organisations: 'AI Confidence for Organisations',
    waitlist: 'AI Confidence Day — Waitlist',
    private: 'AI Confidence — Private Day Request',
    cohort_waitlist: 'AI Confidence Digital Cohort — Waitlist',
    leaders_waitlist: 'AI Confidence for Leaders — Waitlist',
    organisations_waitlist: 'AI Confidence for Organisations — Waitlist',
  };

  const variantIntro: Record<string, string> = {
    cohort: 'We\'ve received your application for the <strong style="color:#111111;">AI Confidence Digital Cohort</strong>.',
    leaders: 'We\'ve received your interest in <strong style="color:#111111;">AI Confidence for Leaders</strong>.',
    organisations: 'We\'ve received your enquiry about <strong style="color:#111111;">AI Confidence for Organisations</strong>.',
    waitlist: 'You\'re now on the waitlist for the <strong style="color:#111111;">next AI Confidence Day</strong>.',
    private: 'We\'ve received your request for a <strong style="color:#111111;">Private AI Confidence Day</strong>.',
    cohort_waitlist: 'You\'re on the waitlist for the <strong style="color:#111111;">AI Confidence Digital Cohort</strong>.',
    leaders_waitlist: 'You\'re on the waitlist for <strong style="color:#111111;">AI Confidence for Leaders</strong>.',
    organisations_waitlist: 'You\'re on the waitlist for <strong style="color:#111111;">AI Confidence for Organisations</strong>.',
  };

  const variantNextSteps: Record<string, string> = {
    cohort: 'We review every application personally. You will hear from us within 1–2 business days.',
    leaders: 'We will confirm your place and send you everything you need ahead of the day. You will hear from us within 1–2 business days.',
    organisations: 'We will arrange a discovery call to understand your organisation\'s needs. You will hear from us within 1–2 business days.',
    waitlist: 'You will be among the first to know when the next date is confirmed, before we open publicly.',
    private: 'We will be in touch to arrange a conversation about your organisation\'s needs and how we can design a bespoke programme.',
    cohort_waitlist: 'We\'ll contact you before the next cohort opens to the public.',
    leaders_waitlist: 'We\'ll let you know as soon as the next AI Confidence Day for Leaders is confirmed.',
    organisations_waitlist: 'We\'ll be in touch as soon as the next intake opens.',
  };

  // Maps each variant to a HubSpot boolean checkbox property
  // These properties must exist in HubSpot: Contacts → Properties → Single checkbox
  const variantProperties: Record<string, string> = {
    cohort: 'ai_confidence_cohort',
    leaders: 'ai_confidence_leaders',
    organisations: 'ai_confidence_organisations',
    waitlist: 'ai_confidence_waitlist',
    private: 'ai_confidence_organisations',
    cohort_waitlist: 'ai_confidence_cohort',
    leaders_waitlist: 'ai_confidence_leaders',
    organisations_waitlist: 'ai_confidence_organisations',
  };

  const programmeLabel = variantLabels[variant] ?? variant;
  const programmeProp = variantProperties[variant];
  const emailIntro = variantIntro[variant] ?? `We've received your interest in <strong style="color:#111111;">${programmeLabel}</strong>.`;
  const emailNextSteps = variantNextSteps[variant] ?? 'We review every enquiry personally. You will hear from us within 1–2 business days.';

  // --- HubSpot ---
  try {
    const hubspot = new HubSpotClient({ accessToken: process.env.HUBSPOT_ACCESS_TOKEN });
    const [firstName, ...rest] = name.trim().split(' ');

    const contactProperties: Record<string, string> = {
      firstname: firstName,
      lastname: rest.join(' ') || '',
      email,
      company: organisation ?? '',
      jobtitle: role ?? '',
      hs_lead_status: 'NEW',
      message: `Programme: ${programmeLabel}${companySize ? ` | Company size: ${companySize}` : ''}`,
    };
    const companySizeMap: Record<string, string> = {
      '1-10': '1-10 employees',
      '11-50': '11-50 employees',
      '51-250': '51-250 employees',
      '251-1000': '251-1,000 employees',
      '1000+': '1,000+ employees',
    };
    if (companySize && companySizeMap[companySize]) {
      contactProperties['company_size_range'] = companySizeMap[companySize];
    }
    if (programmeProp) contactProperties[programmeProp] = 'true';

    try {
      await hubspot.crm.contacts.basicApi.create({ properties: contactProperties });
    } catch (createErr: unknown) {
      const status = (createErr as { code?: number })?.code;
      if (status === 409) {
        // Contact already exists, find them and add the new programme flag
        const search = await hubspot.crm.contacts.searchApi.doSearch({
          filterGroups: [{ filters: [{ propertyName: 'email', operator: FilterOperatorEnum.Eq, value: email }] }],
          properties: ['email'],
          limit: 1,
          after: '0',
          sorts: [],
        });
        if (search.results.length > 0 && programmeProp) {
          await hubspot.crm.contacts.basicApi.update(search.results[0].id, {
            properties: { [programmeProp]: 'true' },
          });
        }
      } else {
        throw createErr;
      }
    }
  } catch (err: unknown) {
    console.error('HubSpot error:', err);
    return NextResponse.json({ error: 'Could not save your details. Please try again.' }, { status: 500 });
  }

  // --- Resend ---
  const resend = new Resend(process.env.RESEND_API_KEY);
  const firstName = name.split(' ')[0];

  // Confirmation to the user, styled
  await resend.emails.send({
    from: 'AI Confidence <noreply@aiconfidence.co>',
    to: email,
    subject: `You're on our list — ${programmeLabel}`,
    html: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:Georgia,serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr><td style="background:#111111;padding:40px 48px 36px;text-align:center;">
          <div style="width:40px;height:2px;background:#D4AF37;margin:0 auto 20px;"></div>
          <p style="margin:0 0 6px;color:#D4AF37;font-family:Arial,sans-serif;font-size:10px;letter-spacing:4px;text-transform:uppercase;">AI Confidence</p>
          <p style="margin:0;font-family:Georgia,serif;font-size:22px;color:#ffffff;letter-spacing:2px;font-weight:normal;">aiconfidence.co</p>
        </td></tr>

        <!-- Gold rule -->
        <tr><td style="height:3px;background:#D4AF37;"></td></tr>

        <!-- Body -->
        <tr><td style="background:#ffffff;padding:48px 48px 40px;text-align:center;">
          <h1 style="margin:0 0 24px;font-family:Georgia,serif;font-size:28px;font-weight:normal;color:#111111;line-height:1.2;">
            Thank you, ${firstName}.
          </h1>
          <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:15px;color:#444444;line-height:1.7;">
            ${emailIntro}
          </p>
          <p style="margin:0 0 32px;font-family:Arial,sans-serif;font-size:15px;color:#444444;line-height:1.7;">
            Someone from our team will be in touch shortly with next steps.
          </p>

          <!-- Divider -->
          <div style="height:1px;background:#eeeeee;margin:0 0 32px;"></div>

          <p style="margin:0 0 8px;font-family:Arial,sans-serif;font-size:11px;color:#888888;letter-spacing:2px;text-transform:uppercase;">What happens next</p>
          <p style="margin:0 0 16px;font-family:Arial,sans-serif;font-size:14px;color:#666666;line-height:1.7;">
            ${emailNextSteps}
          </p>
          <p style="margin:0;font-family:Arial,sans-serif;font-size:14px;color:#666666;line-height:1.7;">
            In the meantime, you can learn more at
            <a href="https://aiconfidence.co" style="color:#D4AF37;text-decoration:none;">aiconfidence.co</a>.
          </p>
        </td></tr>

        <!-- Footer -->
        <tr><td style="background:#111111;padding:32px 48px;">
          <p style="margin:0 0 8px;font-family:Arial,sans-serif;font-size:11px;color:#ffffff;letter-spacing:2px;text-transform:uppercase;">AI Confidence</p>
          <p style="margin:0;font-family:Arial,sans-serif;font-size:12px;color:#666666;line-height:1.6;">
            A programme by
            <a href="https://collectiveintelligence.co" style="color:#888888;text-decoration:none;">Collective Intelligence</a>
            &nbsp;·&nbsp;
            <a href="https://solvedtogether.co.uk" style="color:#888888;text-decoration:none;">Solved Together</a>
          </p>
          <p style="margin:8px 0 0;font-family:Arial,sans-serif;font-size:11px;color:#444444;">
            You received this because you submitted a form at aiconfidence.co.
          </p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
    `,
  });

  // Notification to the team
  await resend.emails.send({
    from: 'AI Confidence <noreply@aiconfidence.co>',
    to: 'chris@collectiveintelligence.co',
    subject: `New enquiry: ${name} — ${programmeLabel}`,
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Organisation:</strong> ${organisation ?? '—'}</p>
      <p><strong>Role:</strong> ${role ?? '—'}</p>
      <p><strong>Company Size:</strong> ${companySize ?? '—'}</p>
      <p><strong>Programme:</strong> ${programmeLabel}</p>
    `,
  });

  return NextResponse.json({ ok: true });
}
