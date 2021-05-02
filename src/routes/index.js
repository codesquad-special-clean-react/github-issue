import { PATHS } from "../constants/paths";
import Labels from "../components/pages/labels";
import Milestones from "../components/pages/milestones";
import MilestoneForm from "../components/organisms/milestones/milestone-form";

export const ROUTES = [
  { path: PATHS.LABELS_PATH, component: Labels },
  { path: PATHS.NEW_MILESTONE_PATH, component: MilestoneForm },
  { path: PATHS.EDIT_MILESTONE_PATH, component: MilestoneForm },
  { path: PATHS.MILESTONES_PATH, component: Milestones },
];
