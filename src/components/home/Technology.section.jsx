import React from "react";

import { withBreakpoints } from "gatsby-plugin-breakpoints";


import {
  Container,

} from "../globals/Blocks";

import "../../global.css";



const TechnologySection = (props) => {


  return (
    <Container>
      {/* <PresentationBox>
        <h3>Mobile</h3>

        <GridBlocks>
          {techs.map(
            (tech) =>
              tech.frontend?.gatsbyImageData && (
                <PostSquare
                  image={tech.frontend?.gatsbyImageData}
                  excerpt={tech.frontend.excerpt}
                  width={350}
                  height={450}
                  animated={addSlideUpAnim}
                >
                  Teoria
                </PostSquare>
              )
          )}
        </GridBlocks>
      </PresentationBox> */}
    </Container>
  );
};


export default withBreakpoints(TechnologySection);
