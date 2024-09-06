import React from 'react'
import { useSpring, animated, config } from '@react-spring/web';

function CompetenceItem ({image, alt, name, filter}) {
    const [style, api] = useSpring(() => ({
        opacity: 0,
        transform: 'translateY(-20px)',
        config: config.default
      }));
    
      React.useEffect(() => {
        api.start({
          opacity: 1,
          transform: 'translateY(0px)',
          reset: true
        });
      }, [filter, api]);

    return (
        <animated.div style={style} className='item'>
            <img src={image} alt={alt} className='item_image'/>
            <p>{name}</p>
        </animated.div>
    )
}

export default CompetenceItem