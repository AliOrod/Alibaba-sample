// Initialization for ES Users
import { Collapse, initTWE, Carousel, initTWE, Tab } from "tw-elements";

initTWE({ Collapse }, { Carousel }, { Tab });

import { Application } from '@splinetool/runtime';

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/YhXZDIWDTa9o-V6n/scene.splinecode');
