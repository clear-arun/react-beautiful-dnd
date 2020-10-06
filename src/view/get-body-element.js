// @flow
import { invariant } from '../invariant';

export default (): HTMLBodyElement => {
  if (!window.DND_DOC_BODY_EL) {
    const domNodeWithShadow: Element = document.querySelector(
      '[data-has-shadow-root="true"]',
    );
    const body: ?HTMLBodyElement | ?DocumentFragment = domNodeWithShadow
      ? domNodeWithShadow.shadowRoot
      : document.body;
    window.DND_DOC_BODY_EL = body;
  }
  invariant(window.DND_DOC_BODY_EL, 'Cannot find document.body');
  return window.DND_DOC_BODY_EL;
};
