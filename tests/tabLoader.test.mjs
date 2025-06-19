import test from 'node:test';
import assert from 'node:assert/strict';
import { loadTab } from '../src/TabLoader.js';

test('loadTab shows fallback for missing tab', async () => {
  let content = '';
  global.document = {
    getElementById() {
      return {
        get innerHTML() { return content; },
        set innerHTML(v) { content = v; }
      };
    }
  };
  const mod = await loadTab('no-such-tab');
  assert.equal(mod, null);
  assert.equal(content, 'Tab no-such-tab not found.');
});
