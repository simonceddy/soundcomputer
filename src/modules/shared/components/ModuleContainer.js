import { MM_3U, MM_HP } from '../../../support/modules/consts';

function getWidth(hp = 1) {
  return MM_HP * hp;
}

function ModuleContainer({
  children, className = '', style = {}, hp = 1
}) {
  return (
    <div
      className={`${className} select-none`}
      style={{ width: 4 * getWidth(hp), height: 4 * MM_3U, ...style }}
    >
      {children}
    </div>
  );
}

export default ModuleContainer;
