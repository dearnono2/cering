// popup은 사이트 내의 팝업 부분의 모션에 영향을 준다. ex) 이미자나 유튜브 영상을 클릭하면 뜨는 화면.

import { useState, forwardRef, useEffect, useImperativeHandle } from "react";
import {motion, AnimatePresence} from 'framer-motion';

const Popup = forwardRef((props, ref) => {

  const [Open, setOpen] = useState(false);
  useImperativeHandle(ref, () => {
    return {
      open: () => setOpen(true),
    };
  });

  // useEffect(() => {
  //   document.body.style.overflow = 'hidden';
  //   return() => {
  //     document.body.style.overflow = 'auto';
  //   }
  // }, []);

  useEffect(() => {
    Open ? (document.body.style.overflow = 'hidden')
        : (document.body.style.overflow = 'auto');
  }, [Open]);
  
  return(
    // 모션을 걸고 싶은 요소를 AnimatePresence로 감싸준다. 그리고 모션을 걸 요소의 앞에 motion. 을 붙여준다.
    // initial에 
    <AnimatePresence>
      {Open && (
        <motion.aside className="pop" 
          initial={{ opacity: 0, scale: 0, }} 
          animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }} 
          exit={{ opacity: 0, scale: 0, transition: { duration: 0.5, delay: 0.5 } }}>
          <motion.div className="con"
          initial={{opacity: 0}}
          animate={{opacity: 1, transition: { duration: 0.5, delay: 1 }}}
          exit={{opacity: 0, transition: { delay: 0 }}}
          >{props.children}</motion.div>
          <motion.span
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { delay: 1.5 } }}
            className="close" onClick={() => { setOpen(false) }}>close</motion.span>
        </motion.aside>
      )}
    </AnimatePresence>
  );
});


export default Popup;