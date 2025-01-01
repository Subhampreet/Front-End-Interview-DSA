export default function Pop(props) {
    return props.trigger ? (
      <div className="pop-up">
        <div className="pop-up-inner">
          <button
            className="pop-up-close"
            onClick={() => props.setTrigger(false)}
          >
            X
          </button>
          {props.children}
        </div>
      </div>
    ) : (
      ""
    );
  }
  