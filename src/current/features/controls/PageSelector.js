import { useDispatch, useSelector } from 'react-redux';
import CircleSpan from '../../../modules/shared/components/CircleSpan';
import ControlButton from '../../components/ControlButton';
import { setPage } from '../pads/padsSlice';

const pageLeds = [1, 2, 3, 4];

function PageSelector() {
  const page = useSelector((s) => s.pads.page);
  const dispatch = useDispatch();
  return (
    <div className="row all-center mr-2 ml-auto p-1 rounded-lg bg-sky-400/30">
      <span className="mr-1 font-digi text-lg mb-auto mt-1 font-bold">Pg.</span>
      <div className="col all-center">
        <div className="row mx-auto">
          {pageLeds.map((i) => (
            <div
              className="font-digi text-sm font-bold col all-center mb-0.5"
              key={`page-led-${i}`}
            >
              <span>{i}</span>
              <CircleSpan
                className={`w-4 h-4 mx-0.5 mb-2 rounded-full border border-slate-500 ${page === i ? 'bg-red-400' : 'bg-slate-400'}`}
              />
            </div>
          ))}
        </div>
        <div className="row">
          <div className="mr-0.5">
            <ControlButton
              className={`${page === 1 ? 'active:bg-red-600' : 'active:bg-green-600'}`}
              onClick={() => {
                if (page > 1) {
                  dispatch(setPage(page - 1));
                }
              }}
            >
              ←
            </ControlButton>
          </div>
          <div className="ml-0.5">
            <ControlButton
              className={`${page === 4 ? 'active:bg-red-600' : 'active:bg-green-600'}`}
              onClick={() => {
                if (page < 4) {
                  dispatch(setPage(page + 1));
                }
              }}
            >
              →
            </ControlButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageSelector;
