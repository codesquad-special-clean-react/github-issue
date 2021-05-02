import color from '../../utils/color';
const { white, grey } = color;

const BookIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-notebook"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke={white}
    fill="none"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />
    <line x1="13" y1="8" x2="15" y2="8" />
    <line x1="13" y1="12" x2="15" y2="12" />
  </svg>
);

const LabelIcon = ({ isSelected = false }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-tag"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke={isSelected ? white : grey}
    fill="none"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M11 3l9 9a1.5 1.5 0 0 1 0 2l-6 6a1.5 1.5 0 0 1 -2 0l-9 -9v-4a4 4 0 0 1 4 -4h4" />
    <circle cx="9" cy="9" r="2" />
  </svg>
);

const MilestonesIcon = ({ isSelected = false }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon icon-tabler icon-tabler-directions"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke={isSelected ? white : grey}
    fill="none"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M9 5h10l2 2l-2 2h-10a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" />
    <path d="M13 13h-7l-2 2l2 2h7a1 1 0 0 0 1 -1v-2a1 1 0 0 0 -1 -1" />
    <line x1="12" y1="22" x2="12" y2="17" />
    <line x1="12" y1="13" x2="12" y2="9" />
    <line x1="12" y1="5" x2="12" y2="3" />
  </svg>
);

const RefreshIcon = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-refresh"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke={color}
      fill="none"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
      <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
    </svg>
  );
};

const CalendarIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-calendar-event"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke={color.grey}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <rect x="4" y="5" width="16" height="16" rx="2" />
      <line x1="16" y1="3" x2="16" y2="7" />
      <line x1="8" y1="3" x2="8" y2="7" />
      <line x1="4" y1="11" x2="20" y2="11" />
      <rect x="8" y="15" width="2" height="2" />
    </svg>
  );
};

export { LabelIcon, MilestonesIcon, BookIcon, RefreshIcon, CalendarIcon };
