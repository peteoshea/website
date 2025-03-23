import { describe, expect, test } from 'vitest';

import myCv from '@/source/content/cv/myCv';
import myEducation from '@/source/content/cv/myEducation';
import myEmployment from '@/source/content/cv/myEmployment';
import myPortfolio from '@/source/content/cv/myPortfolio';
import myProfile from '@/source/content/cv/myProfile';
import mySkills from '@/source/content/cv/mySkills';

describe('myCv', () => {
  test('contains my profile', () => {
    expect(myCv.profile).toBe(myProfile);
  });

  test('contains my skills', () => {
    expect(myCv.skills).toBe(mySkills);
  });

  test('contains my portfolio', () => {
    expect(myCv.portfolio).toBe(myPortfolio);
  });

  test('contains my employment', () => {
    expect(myCv.employment).toBe(myEmployment);
  });

  test('contains my education', () => {
    expect(myCv.education).toBe(myEducation);
  });
});
