import React from 'react'
import {motion} from "framer-motion"
import { Link } from 'react-router-dom'
import { zoomIn } from '../../utlits/zoomIn'

const TeamCard = ({ id, src, name, position, social_media, style }) => {
    return (
        <motion.div className={`single-team-card ${style}`}
            initial="offscreen"
            whileInView="onscreen"
            variants={zoomIn(id)}
            viewport={{ once: true, amount: 0 }}
        >
            <div className="image">
                {/* <Link className="text-decoration-none" to="/team">
                    <img src={src} alt="team-image" />
                </Link> */}
            </div>
            <h3>
                <Link className="text-decoration-none" to="/team">{name}</Link>
            </h3>
            <p>{position}</p>
           
        </motion.div>
    )
}

export default TeamCard