import { p as parser$1, f as flowDb } from './flowDb-170db09d-0a65541e.js';
import { f as flowRendererV2, g as flowStyles } from './styles-b966c4ae-a1e2fef5.js';
import { t as setConfig } from './mermaid.core-7fd9ba67.js';
import './layout-f276f43d.js';
import './index-67a42d7d-1ce6a8ba.js';
import './edges-80f1ebb6-fd2d7bac.js';
import './createText-aebacdfe-6356781a.js';
import './line-cea88844.js';
import './array-72ffbca2.js';
import './path-6ca35b3e.js';

const diagram = {
  parser: parser$1,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};

export { diagram };
