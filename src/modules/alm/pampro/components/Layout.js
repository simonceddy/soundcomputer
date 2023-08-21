import { MM_3U, MM_HP } from '../../../../support/modules/consts';

const width = Math.round(4 * (8 * MM_HP));
const height = 4 * MM_3U;

function Layout({ children }) {
  return (
    <div
      className="col justify-start font-alm items-center border border-slate-200 rounded-sm"
      style={{
        width,
        height,
        backgroundColor: '#dedede',
      }}
    >
      {children}
    </div>
  );
}

export default Layout;
