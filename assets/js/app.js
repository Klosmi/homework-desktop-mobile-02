// To prevent FOUC 
// *Check whether the node currently has scrollbars and is scrollable.*

const isScrollable = function (element) {
  // Compare the height to see if the element has scrollable content
  const hasScrollableContent = element.scrollHeight > element.clientHeight;
  // It's not enough because the element's `overflow-y` style can be set as
  // * `hidden`
  // * `hidden !important`
  // In those cases, the scrollbar isn't shown
  const overflowYStyle = window.getComputedStyle(element).overflowY;
  const isOverflowHidden = overflowYStyle.indexOf('hidden') !== -1;

  return hasScrollableContent && !isOverflowHidden;
};
// source: https://htmldom.dev/check-if-an-element-is-scrollable/