import React from 'react'
import { motion } from "framer-motion"
import { slideUp } from '../../utlits/slideUp'

const Title = ({sectionName, sectionTitle, style,mainStyle}) => {
    return (
        <motion.div className={`section-title text-center ${style}`}
            initial="offscreen"
            whileInView="onscreen"
            variants={slideUp(1)}
            viewport={{ once: true, amount: 0.4 }}
        >
            <span style={mainStyle} className="d-block">{sectionName}</span>
            <h2>{sectionTitle}</h2>
        </motion.div>
    )
}

export default Title