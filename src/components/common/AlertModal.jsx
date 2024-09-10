const AlertModal = ({ setVisible }) => {
  return (
    <div className="" >
      <div className="">
        <div className="modal-content">
          <div className="modal-header"></div>
          <div className="modal-body">
            <div className="form-group">We will get back to you soon!</div>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="btn-close"
        onClick={() => setVisible(false)}
      >
        <i className="ri-close-line"></i>
      </button>
    </div>
  );
};

export default AlertModal;
