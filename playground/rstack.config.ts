// Configuration guide: https://rstack.rs/config
import { define } from 'rstack';
import { pluginCssMinimizer } from '../src/index.ts';

define.app({
  plugins: [pluginCssMinimizer()],
});
