import {
  IconCar,
  IconCode,
  IconDeviceMobile,
  IconHeadset,
  IconHelmet,
  IconStar,
  IconTargetArrow,
  IconTool,
} from "@tabler/icons-react";

// Per ogni settore: icona della livrea Rosso corsa e della livrea VI
export const sectorIcons = {
  progetti: { rosso: IconCode, vi: IconTargetArrow },
  "come-lavoro": { rosso: IconTool, vi: IconCar },
  "chi-sono": { rosso: IconHelmet, vi: IconStar },
  contatti: { rosso: IconHeadset, vi: IconDeviceMobile },
};
