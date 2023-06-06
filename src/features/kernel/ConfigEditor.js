import { useDispatch, useSelector } from 'react-redux';
import { defaultConfig } from './config';
import { setConfigVal } from './kernelSlice';

const configKeys = Object.keys(defaultConfig);

function showVal(val) {
  switch (typeof val) {
    case 'boolean':
      return val === true ? 'true' : 'false';
    default:
      return val;
  }
}

function ConfigEditor() {
  const config = useSelector((s) => s.kernel.config);
  const dispatch = useDispatch();
  return (
    <div className="w-full text-sm">
      <div className="flex flex-col justify-start items-start w-full">
        {configKeys.map((k) => (
          <div className="flex-row flex justify-between w-1/2" key={`config-editor-row-${k}`}>
            <span>{k}</span>
            <span>{config[k] !== undefined ? showVal(config[k]) : 'null'}</span>
            <input
              type="checkbox"
              checked={config[k] === true}
              onChange={(e) => {
                console.log('checked');
                dispatch(setConfigVal({
                  key: k,
                  value: e.target.checked
                }));
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ConfigEditor;
