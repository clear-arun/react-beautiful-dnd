// @flow
import { invariant } from '../invariant';

export default (): HTMLBodyElement => {
  const domNodeWithShadow: Element = document.querySelector(
    '[data-has-shadow-root="true"]',
  );
  const body: ?HTMLBodyElement | ?DocumentFragment = domNodeWithShadow
    ? domNodeWithShadow.shadowRoot
    : document.body;
  invariant(body, 'Cannot find document.body');
  return body;
};
