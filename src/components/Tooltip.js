import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Tooltip = ({ position, content, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => {
    setIsVisible(true);
  };

  const hideTooltip = () => {
    setIsVisible(false);
  };

  return (
    <div className="tooltip-container" onMouseEnter={showTooltip} onMouseLeave={hideTooltip}>
      {isVisible && (
        <div className={`tooltip tooltip-${position}`}>
          <div className="tooltip-content">{content}</div>
        </div>
      )}
      {children}
    </div>
  );
};

Tooltip.propTypes = {
  position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  content: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Tooltip.defaultProps = {
  position: 'top',
  content: '',
};

export default Tooltip;
