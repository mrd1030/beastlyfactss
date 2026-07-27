import {
  getCategoryChipAccessibility,
  getFactSaveAccessibility,
  getPaginationAccessibility,
} from '@/lib/accessibility';

describe('accessibility metadata', () => {
  it('builds save labels and selected state', () => {
    expect(getFactSaveAccessibility(true, 'Sea otter tools')).toEqual({
      label: 'Unsave fact: Sea otter tools',
      selected: true,
    });
    expect(getFactSaveAccessibility(false, 'Sea otter tools')).toEqual({
      label: 'Save fact: Sea otter tools',
      selected: false,
    });
  });

  it('builds chip selected state', () => {
    expect(getCategoryChipAccessibility(true, 'Reptiles')).toEqual({ label: 'Reptiles', selected: true });
    expect(getCategoryChipAccessibility(false, 'Reptiles')).toEqual({ label: 'Reptiles', selected: false });
  });

  it('builds pagination disabled state', () => {
    expect(getPaginationAccessibility(true, false)).toEqual({ previousDisabled: true, nextDisabled: false });
    expect(getPaginationAccessibility(false, true)).toEqual({ previousDisabled: false, nextDisabled: true });
  });
});
