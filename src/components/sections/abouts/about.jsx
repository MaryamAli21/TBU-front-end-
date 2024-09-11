import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import { slideUp } from '../../../utlits/slideUp'
import Title from "../../../components/common/title";
import TeamCard from "../../../components/sections/teamCard";
import { teamData } from "../../../utlits/data/teamData";

const About = () => {
    return (
        <div className="about-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-12">
                        <motion.div className="about-content about-style"
                            initial="offscreen"
                            whileInView="onscreen"
                            variants={slideUp(2)}
                            viewport={{ once: true, amount: 0.4 }}
                        >
                            <div className="title">
                                <span className="d-block">About</span>
                                <h2>The Comprehensive Solution for Your Needs.</h2>
                                <p>We have been operating since 2009 among the region. Our expertise isn't just about technology. It's about understanding the nuances and unique challenges of various sectors
                                TBU & VM Group is deeply committed to accelerating the Vision 2030 objectives across the GCC
                                <br/> 
                                <br/> 
                                We are specialized in localizing and adapting global IT solutions for companies targeting the Middle East market. Our support includes a deep understanding of the competitive landscape, customers' requirements, technological readiness, local regulations, cultural differences, language barriers, and other business practices essential for smooth business operations. By tapping into our resources and local knowledge, international companies can successfully navigate the complexity of operating in a new environment.
                                <br />
                                <br/> 
                                Our focus lies in adapting and delivering IT solutions that enable local companies to reduce costs, streamline operations, enhance talent development, and strengthen cybersecurity defences.
                                </p>
                            </div>
                            <div className="team-area  pb-75">
        <div className="container">
          <Title
            sectionName={"Our Team"}
            sectionTitle={"Founders"}
            style={"style-2"}
          />
          <div className="row justify-content-center">
            {teamData
              .slice(0, 4)
              .map(({ id, name, position, social_media, src }) => {
                return (
                  <motion.div
                    key={id}
                    className="col-lg-3 col-sm-6"
                    initial="offscreen"
                    whileInView="onscreen"
                    // variants={zoomIn(id)}
                    viewport={{ once: true, amount: 0.4 }}
                  >
                    <TeamCard
                      id={id}
                      name={name}
                      position={position}
                      social_media={social_media}
                      src={src}
                    />
                  </motion.div>
                );
              })}
          </div>
        </div>
        <div className="bg-ellipse"></div>
      </div>

                              </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About