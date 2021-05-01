import { PATHS } from "../constants/paths";
import Labels from "../components/pages/labels";
import Milestones from "../components/pages/milestones";

export const ROUTES = [
  { path: PATHS.LABELS_PATH, component: Labels },
  { path: PATHS.MILESTONES_PATH, component: Milestones },
];
