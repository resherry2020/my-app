import React from "react";

function Outputtable(props) {
  return (
    <div class="row justify-content-center mt-5">
      <div class="alert alert-danger" role="alert">
        Caution: This sunscreen may pose a threat to marine life. We strongly
        advise against using it while in the ocean.
        <br />
        <a href="/about" class="alert-link">
          [ Click here ]
        </a>
        to view our ingredient analysis for more information
      </div>
      <div class="col ">
        <table class="table table-warning table-striped mt-5">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Impact</th>
            </tr>
          </thead>
          <tbody>
            {props.ing.includes("parabens") && (
              <tr>
                <td>Parabens</td>
                <td>
                  Parabens are preservatives commonly used in cosmetics,
                  including some sunscreens.
                </td>
                <td>
                  Detected in marine environments, and their potential
                  endocrine-disrupting effects on aquatic organisms are under
                  investigation.
                </td>
              </tr>
            )}
            {props.ing.includes("triclosan") && (
              <tr>
                <td>Triclosan</td>
                <td>
                  Triclosan is an antibacterial and antifungal agent used in
                  some sunscreens.
                </td>
                <td>
                  Detected in marine environments, and its long-term effects on
                  aquatic ecosystems, including potential hormone disruption,
                  are a subject of concern.
                </td>
              </tr>
            )}
            {props.ing.includes("para aminobenzoic acid") && (
              <tr>
                <td>Para-Aminobenzoic Acid</td>
                <td>
                  Para-Aminobenzoic Acid is a chemical UV filter, but its use
                  has decreased due to skin sensitivity issues.
                </td>
                <td>
                  Limited information, but its potential environmental impact is
                  a subject of concern
                </td>
              </tr>
            )}
            {props.ing.includes("oxybenzone") && (
              <tr>
                <td>Oxybenzone</td>
                <td>
                  Oxybenzone is a chemical UV filter that absorbs UVB and UVA
                  rays.
                </td>
                <td>
                  Linked to coral bleaching, DNA damage in coral larvae, and
                  disruption of endocrine systems in fish.
                </td>
              </tr>
            )}
            {props.ing.includes("avobenzone") && (
              <tr>
                <td>Avobenzone</td>
                <td>
                  Avobenzone is a chemical UV filter known for its UVA-absorbing
                  properties.
                </td>
                <td>
                  Generally considered safer than some other chemicals, but its
                  safety in the marine environment is still under research.
                </td>
              </tr>
            )}
            {props.ing.includes("octinoxate") && (
              <tr>
                <td>Octinoxate</td>
                <td>
                  Octinoxate is a chemical UV filter used for its UVB-absorbing
                  properties.
                </td>
                <td>
                  Associated with coral bleaching and may have
                  hormone-disrupting effects on fish.
                </td>
              </tr>
            )}
            {props.ing.includes("octocrylene") && (
              <tr>
                <td>Octocrylene</td>
                <td>
                  Octocrylene is a chemical UV filter that absorbs both UVA and
                  UVB rays.
                </td>
                <td>
                  Limited studies, but it has been detected in marine
                  environments and could accumulate in aquatic organisms.
                </td>
              </tr>
            )}
            {props.ing.includes("methylbenzylidene camphor") && (
              <tr>
                <td>4-methylbenzylidene camphor</td>
                <td>
                  This is a chemical compound used in some sunscreens for UV
                  protection.
                </td>
                <td>
                  Limited research, but it has been detected in water and may
                  pose a risk to marine life.
                </td>
              </tr>
            )}
            {props.ing.includes("homosalate") && (
              <tr>
                <td>Homosalate</td>
                <td>
                  Homosalate is part of a group of chemicals known as chemical
                  UV filters.
                </td>
                <td>
                  Chemical UV filters have been associated with coral bleaching
                  and the disruption of coral ecosystems.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Outputtable;
