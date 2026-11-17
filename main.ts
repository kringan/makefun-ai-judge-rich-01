// ai-judge-rich-01 entry (Node 22, standard library only): it writes one plan
// to /output/entry.txt — a done-for-you missed-call rescue sold to US home-service
// firms that already pay for Google Ads. The gate takes UTF-8 text of 1 to 1,000
// characters, not only white space, and the judge reads exactly the bytes written,
// so write no line end you do not mean to show. The program runs twice with no
// network, and both runs must write the same bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const PLAN = [
  'Sell a done-for-you missed-call rescue to US roofers, plumbers and HVAC firms: every unanswered call is a lost booked job.',
  'Day 1: list 600 firms from Google Maps that run Google Ads but have no website or a broken one — they already pay for clicks they waste. Build one site template and reuse it for all 600.',
  'Build each a live one-page site from their own listing (services, reviews, photos) with click-to-call and a quote form that texts the owner instantly (Twilio, $1 a month per number).',
  "Email the owner the live link: 'Your site is live — keep it for $249 or I take it down Friday.'",
  'Days 2-30: build 21 sites a day, email 20 new owners a day, one follow-up each.',
  "At a 5% close rate on 600 pitches that's 30 sales x $249, about $7,500 by day 30, minus about $60 costs; at 2% it's still $3,000.",
  'After a buyer pays, offer $29 a month hosting and updates — half stay, so income compounds.',
  'Edge: the buyer already spends on ads, the product exists before they pay, and every sale is cash up front.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), PLAN);
