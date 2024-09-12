import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'; 

const ConfirmDialog = ( message, opt = { confirm: 'Yes', decline: 'No' }) => {
  return new Promise((resolve) =>
    confirmAlert({
      message,
      buttons: [
        {
          label: opt.confirm,
          onClick: () => {
            resolve(true);
          },
        },
        {
          label: opt.decline,
          onClick: () => resolve(false),
        },
      ],

    })
  );
};

export default ConfirmDialog;
