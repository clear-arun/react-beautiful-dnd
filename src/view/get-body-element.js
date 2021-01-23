// @flow
import { invariant } from '../invariant';

export default (): HTMLBodyElement => {
  const body: ?HTMLBodyElement | ?DocumentFragment =
    window.dnd_active_shadow_root || document.body;

  invariant(body, 'Cannot find document.body');
  return body;
};
