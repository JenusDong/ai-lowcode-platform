var RTG = {};
if (typeof window !== 'undefined') {
  RTG = window.ReactTransitionGroup ||
        window.reactTransitionGroup ||
        window.CSSTransition && {
          CSSTransition: window.CSSTransition,
          SwitchTransition: window.SwitchTransition,
          TransitionGroup: window.TransitionGroup
        } || {};
}
module.exports = RTG;
