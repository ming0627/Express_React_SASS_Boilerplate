import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '../App.scss';

import styled from "styled-components";

class Home extends Component {
  render() {
    return (
    <div className="App">
    <Wrapper>
      <h1>Home</h1>
      <Link to={'./portfolio'}>
        <button>
            Portfolio
        </button>
      </Link>
      <Link to={'./list'}>
        <button>
            My List
        </button>
      </Link>
      <Link to={'./lab'}>
        <button>
            Lab
        </button>
      </Link>
      <Link to={'./contact'}>
        <button >
            Contact
        </button>
      </Link>

      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 800 550" className="factorySvg">
            <g id="bg">
              <polygon fill="#A2AD3A" points="237.9,279.6 193.2,294.5 183.2,304.5 196.9,343 231.7,402.7 328.6,349.2 462.2,356.7 565.8,350.9 
                623,341.8 614.5,287.1 528.7,278.4 	"/>
              <polygon fill="#995526" points="196.3,343.4 328.6,349.2 462.2,356.7 565.8,350.9 623,341.8 594.6,408.9 556.1,416.3 542.4,469.8 
                511.3,483.4 480.3,524.5 426.8,523.2 406.9,538.1 346,505.8 322.4,489.7 291.3,493.4 273.9,447.4 231.9,404.7 	"/>
            </g>
            <g id="ground">
              <polygon fill="#677F2E" points="226.1,282.9 192.1,294.5 224.4,319.4 327.4,332.6 481.9,333.5 552.6,323.5 604.8,309.4 613,286.2 
                571.6,281.3 	"/>
              <polygon fill="#798E3F" points="192.1,294.5 183,305.3 196.3,343.4 224.4,319.4 	"/>
              <polygon fill="#99B533" points="328,329.3 196.3,343.4 224.4,319.4 	"/>
              <polygon fill="#748727" points="482.1,331 462.2,356.7 327.2,350.9 328,329.3 	"/>
              <path fill="#84932C" d="M196.3,343.4L328,329.3c0,0,1.7,21.5-0.8,21.5C324.7,350.9,196.3,343.4,196.3,343.4z"/>
              <polygon fill="#6F7722" points="613,286.2 623,341.8 604.8,309.4 	"/>
              <polygon fill="#858930" points="462.2,356.7 565.8,350.9 552.6,323.5 482.1,331 	"/>
              <polygon fill="#919630" points="623,341.8 565.8,350.9 552.6,323.5 604.8,309.4 	"/>
              <polygon fill="#471D13" points="196.3,343.4 231.9,404.7 232.7,345.1 	"/>
              <polygon fill="#703616" points="327.2,350.9 231.9,404.7 232.7,345.1 	"/>
              <polygon fill="#703910" points="462.2,356.7 435.5,385.3 352.9,384.8 327.2,350.9 	"/>
              <polygon fill="#491D0C" points="231.9,404.7 279.1,423 328.8,423.8 352.9,384.8 327.2,350.9 	"/>
              <polygon fill="#662B1B" points="435.5,385.3 454.2,418.8 462.2,356.7 	"/>
              <polygon fill="#4C230F" points="565.8,350.9 454.2,418.8 462.2,356.7 	"/>
              <polygon fill="#68331E" points="623,341.8 599.6,370.3 532.5,370.3 565.8,350.9 	"/>
              <polygon fill="#60330B" points="352.9,384.8 328.8,423.8 359.7,452.4 436.8,385.3 	"/>
              <polygon fill="#703910" points="279.1,423 359.7,452.4 328.8,423.8 	"/>
              <polygon fill="#844A23" points="454.2,418.8 359.7,452.4 436.8,385.3 	"/>
              <polygon fill="#995526" points="532.5,370.3 557.3,417.6 454.2,418.8 	"/>
              <polygon fill="#844318" points="599.6,370.3 557.3,417.6 532.5,370.3 	"/>
              <polygon fill="#703616" points="359.7,452.4 428.1,473.5 454.2,418.8 	"/>
              <polygon fill="#703616" points="557.3,417.6 428.1,473.5 454.2,418.8 	"/>
              <polygon fill="#703616" points="231.9,404.7 273.9,447.4 298.8,471 279.1,423 	"/>
              <polygon fill="#4C230F" points="359.7,452.4 348.5,477.2 298.8,471 279.1,423 	"/>
              <polygon fill="#4C230F" points="557.3,417.6 543.6,469.8 484,447.4 	"/>
              <polygon fill="#68331E" points="428.1,473.5 447.9,510.8 543.6,469.8 484,447.4 	"/>
              <polygon fill="#68331E" points="348.5,477.2 346,505.8 322.4,489.7 301.7,471.3 	"/>
              <polygon fill="#7F3D26" points="428.1,473.5 348.5,477.2 359.7,452.4 	"/>
              <polygon fill="#4C230F" points="447.9,510.8 406.9,538.1 346,505.8 348.5,477.2 428.1,473.5 	"/>
              <polygon fill="#471D13" points="273.9,447.4 291.3,493.4 322.4,489.7 	"/>
              <polygon fill="#471D13" points="428,523.5 480.3,524.5 511.3,483.4 447.9,510.8 	"/>
              <polygon fill="#703616" points="623,341.8 594.6,408.9 599.6,370.3 	"/>
              <polygon fill="#4C230F" points="557.3,417.6 594.6,408.9 599.6,370.3 	"/>
            </g>
            <g id="factory">
              <polygon fill="#BA5543" points="347.3,207.5 347.4,285.4 396.2,286.2 396.2,200.4 394,200.3 371,161 	"/>
              <polygon fill="#89786E" points="363.8,147.5 394.3,198.4 557.7,202.8 525.4,154.9 	"/>
              <polygon fill="#672D2E" points="395.8,200.6 395.8,286.4 418.8,287 418.8,282.6 460.5,284.5 539.1,284.8 539.1,287.9 547.5,287.9 
                546.9,205.3 	"/>
              <polygon fill="#653647" points="370.7,161.1 347.4,206.8 346.8,199 367.9,156.2 	"/>
              <polygon fill="#653647" points="363.4,147.4 336.7,202.4 338.7,205.2 365.4,150.5 	"/>
              <polygon fill="#46141D" points="346.9,205.5 338.8,205.6 365.1,151.4 367.9,156.2 346.8,199 	"/>
              <polygon fill="#787978" points="341.5,192 329.4,191.6 336.7,202.4 	"/>
              <polygon fill="#2C333B" points="338.8,205.6 347.3,218.1 347.3,205.6 	"/>
              <polygon fill="#D9906C" points="329.4,191.6 311.3,222.6 312.4,222.7 329.3,193.7 344.4,217.3 344.4,214 	"/>
              <polygon fill="#943B3D" points="315.8,222.8 312.2,222.7 329,193.7 330.7,196.4 	"/>
              <polygon fill="#6E4830" points="344.4,217.3 347.2,221.4 347.3,218.1 344.4,214 	"/>
              <polygon fill="#D8755B" points="310.5,223 310.6,225.8 314.5,225.9 314.5,223 	"/>
              <polygon fill="#672D2E" points="316,222.8 316,227.6 314.5,225.9 314.5,223 	"/>
              <polygon fill="#AD5A60" points="310.6,225.8 313,227.8 316.3,228.1 314.5,225.9 	"/>
              <polygon fill="#563133" points="346.4,221 344.4,220.9 344.4,223.4 345.9,226.2 347.2,226.4 347.2,221.9 	"/>
              <polygon fill="#D89D7D" points="345.1,226.4 312.5,228 305.5,232.1 305.6,243.3 	"/>
              <polygon fill="#657778" points="347.2,226.4 345.5,226.4 305.6,243.3 305.9,249.7 	"/>
              <polygon fill="#D38E51" points="286.2,104.6 279.6,106.8 285,106.1 	"/>
              <polygon fill="#8D5340" points="278.7,109.2 278.7,111.7 280.3,114.2 285.2,113.3 284.6,110.2 285,106.1 279.6,106.8 	"/>
              <polygon fill="#465343" points="292.1,104.3 286.2,104.6 285,106.1 296.4,106.7 	"/>
              <polygon fill="#0F2121" points="284.7,111.5 296.8,111.3 296.7,108.3 284.8,107.9 	"/>
              <polygon fill="#0F2121" points="296.8,111.3 295.7,113.4 285.2,113.3 284.7,111.5 	"/>
              <polygon fill="#2C333B" points="296.4,106.7 297.1,108.2 284.8,107.9 285,106.1 	"/>
              <polygon fill="#2C333B" points="285.2,113.3 285.2,115.6 295.8,115.8 295.7,113.4 	"/>
              <polygon fill="#653647" points="284.7,111.2 278.7,111.7 280.3,114.2 285.6,113.5 	"/>
              <polygon fill="#B77766" points="284.8,107.9 278.7,109.2 279.6,106.8 285,106.1 	"/>
              <polygon fill="#D8755B" points="280.3,114.2 280.3,116.3 285.3,116.1 285.2,113.3 	"/>
              <polygon fill="#943B3D" points="279.8,116.4 280.2,118.1 285.2,118 285.3,116.1 	"/>
              <polygon fill="#2A2725" points="295.8,115.8 285.3,116.1 285.2,118 295.9,117.8 296.5,116.3 	"/>
              <polygon fill="#C96631" points="280.2,118.1 277.1,222.4 284.1,221.4 285.2,118 	"/>
              <polygon fill="#563133" points="295.9,117.8 298.4,220.2 284.1,221.4 285.2,118 	"/>
              <polygon fill="#562122" points="298.8,222.4 305.2,228.5 305.8,274.6 270.9,274.1 271,242.7 271,241.9 	"/>
              <polygon fill="#040805" points="306.9,227.6 305.2,228.5 298.8,222.4 271.3,241.7 270.2,240.5 298.4,220.2 	"/>
              <polygon fill="#BA8659" points="259.4,223.3 298.4,220.2 270.2,240.5 231.9,243.6 	"/>
              <polygon fill="#99381B" points="231.8,243.9 231.8,245.6 232.6,245.5 232.6,274.3 235.2,274.3 234.7,253.4 236.5,252.1 
                238.1,252.2 240,253.4 240.4,274.6 247.6,274.9 247.2,269.8 242.4,269.9 241.9,252.4 243.8,251.6 245,251.6 246.7,252.7 
                247.4,253.3 247.6,242.4 	"/>
              <polygon fill="#260C05" points="237,274.2 235.2,274.3 234.7,253.4 236.5,252.1 237.7,252.1 240,253.4 238,253.6 236.6,254.9 	"/>
              <polygon fill="#441009" points="243.5,270 243.6,253.4 244.3,252.7 246.1,252.8 245,251.6 243.4,251.8 241.9,252.4 242.4,269.9 	
                "/>
              <polygon fill="#A45628" points="240,253.4 240.4,274.6 237,274.2 236.6,254.9 238.2,253.4 	"/>
              <polygon fill="#C24623" points="247.4,253.3 246.7,252.7 244.3,252.7 243.6,253.4 243.5,270 247.6,269.8 	"/>
              <polygon fill="#CF8238" points="247.6,242.4 260,241.5 259.8,287 258.1,286.4 255.3,288.1 253.2,286.8 251.1,286.8 247.7,283 
                247.4,277.6 245.8,275 247.6,274.9 	"/>
              <polygon fill="#DBA05C" points="270.1,240.8 260,241.5 259.8,287 262.6,288 262.6,289.6 266.2,289.5 267.6,287.3 269.2,288.4 
                268.9,290.5 272.3,289.1 274.6,289.6 275.9,287.4 275.4,282.6 274.7,282.2 274.4,276.3 273.8,275.9 273.9,274 270.9,274.1 
                271,241.9 	"/>
              <polygon fill="#563133" points="272.8,253.3 272.6,273.9 277.9,274.1 278.6,253.4 	"/>
              <polygon fill="#443233" points="279.8,253.4 280,274.1 277.9,274.1 278.6,253.4 	"/>
              <polygon fill="#443233" points="291.6,274.2 291.6,267.6 295.2,267.6 295.6,274.5 	"/>
              <polygon fill="#452531" points="305.8,274.6 310.2,274.5 334.5,274.7 347.1,277.2 347.2,226.4 305.9,249.7 	"/>
              <polygon fill="#533244" points="284.3,235.2 284.5,237.6 296.7,238 296.9,235.2 294.6,234.3 289,233.8 	"/>
              <polygon fill="#2C333B" points="285.2,244.7 295.6,245.2 295.3,237.9 285.1,237.7 	"/>
              <polygon fill="#452531" points="297,245.3 296.7,238 295.3,237.9 295.6,245.2 	"/>
              <polygon fill="#441009" points="232.6,274.3 235.2,274.3 237,274.2 240.4,274.6 245.8,275 247.4,277.6 247.7,283 251.1,286.8 
                247.6,287.3 246.9,286.2 241.4,285.7 238.6,287.3 238.6,288.7 236.6,288.4 235.2,289.6 231.6,289.3 228.5,288.5 224,285.6 
                223.9,273.6 226.5,273.3 227.3,275 	"/>
              <path fill="#533244" d="M316,274.9l-0.6-17.7c0,0-0.3-9.9,8.9-10.1c9.2-0.2,10.3,9.3,10.3,9.3v18.3L316,274.9z"/>
              <path fill="#0F2121" d="M316.5,247.5l7.8-0.5c0,0-7.9,0-8.9,10.1l0.6,17.7l-5.7-0.3l-0.5-18.3C309.8,256.2,309.5,249.7,316.5,247.5
                z"/>
              <polygon fill="#F7F0ED" points="367.9,175 367.7,190.5 363.1,190.8 362.8,175.6 	"/>
              <polygon fill="#787978" points="363.4,176.5 363.5,182.3 366.8,182.1 366.6,176.5 	"/>
              <polygon fill="#2C333B" points="363.7,183.5 366.6,183.2 366.6,188.9 363.8,189.1 	"/>
              <polygon fill="#F7F0ED" points="374.3,174.2 378,174 379.1,175.3 378.9,189.6 374.3,189.9 	"/>
              <polygon fill="#786967" points="375,175.4 377.7,175 377.7,180.7 375.3,181 	"/>
              <polygon fill="#0F2121" points="375.2,182.4 378,182.1 378.1,188.2 374.9,188.5 	"/>
              <polygon fill="#FFFFF6" points="354.1,205.9 358.7,205.9 358.9,222.3 353.9,222.3 	"/>
              <polygon fill="#9BA68A" points="354.7,207.9 357.5,207.6 357.6,213.8 355.1,213.5 	"/>
              <polygon fill="#89786E" points="355,214.9 357.6,214.7 357.5,220.3 354.7,220.3 	"/>
              <polygon fill="#FFFFFF" points="368.2,204.6 372.9,204.6 373,221.3 367.9,221.3 	"/>
              <polygon fill="#2F3D36" points="369,206.7 372.2,206.2 372.2,212.6 369,212.7 	"/>
              <polygon fill="#4D442F" points="369,213.6 372.2,213.5 371.9,219.2 368.5,219.2 	"/>
              <polygon fill="#F7F7EF" points="367.9,264.6 372.7,264.6 373,280.1 368.2,280 	"/>
              <polygon fill="#271E12" points="368.9,265.6 369,271.9 371.9,271.6 371.9,265.7 	"/>
              <polygon fill="#443233" points="368.8,272.8 371.9,272.8 371.8,278.9 369,278.7 	"/>
              <polygon fill="#A45628" points="383.7,283.9 383.7,265.5 389.3,265.8 389.7,284.4 	"/>
              <polygon fill="#441009" points="382.5,283.9 383.7,283.9 383.7,265.5 389.3,265.8 389,265.1 382.2,264.9 	"/>
              <polygon fill="#562731" points="395.7,284.2 394.1,284.3 394.1,286.8 395.8,286.4 	"/>
              <path fill="#99381B" d="M357,283.7l37.1,0.6v2.5c-1.9-0.3-37.3-0.9-37.3-0.9L357,283.7z"/>
              <polygon fill="#562731" points="347.2,257.5 353.1,258.9 357.8,283.6 357,283.7 356.9,285.9 347.1,285.6 	"/>
              <polygon fill="#749289" points="532.4,164.7 525.8,155 363.8,147.5 370.2,158.1 	"/>
              <polygon fill="#DCD7AA" points="396.1,170 403.1,170.5 410,181.7 402.6,181.2 	"/>
              <polygon fill="#E9DCCD" points="412.6,171 418.3,180.7 425.1,180.7 419.4,170.9 	"/>
              <polygon fill="#EDD3B3" points="486.3,174.2 492.8,184.3 499.3,184.4 493.1,173.9 	"/>
              <polygon fill="#4D442F" points="557.7,202.8 557.1,204.9 393.7,200.4 394.3,198.4 	"/>
              <polygon fill="#434442" points="578.6,228.6 546.5,228.2 546.9,205.3 557.1,204.9 557.7,202.8 559.3,201.8 	"/>
              <polygon fill="#584443" points="555.2,186.9 555.6,199 557.7,201.9 558.4,186.2 	"/>
              <polygon fill="#E8AC5C" points="548.1,186.3 548.7,190 555.6,199 555.2,186.9 	"/>
              <polygon fill="#2F111B" points="547.2,231 576.1,231 578.6,228.6 546.5,228.2 	"/>
              <path fill="#6A514E" d="M556.8,246.9v18h8.1l-0.3-17.7C564.6,247.2,561.5,243.5,556.8,246.9z"/>
              <polygon fill="#8C9468" points="558,247.8 563,247.8 563.6,263 558.7,263.4 558.3,255.3 	"/>
              <polygon fill="#441009" points="576.1,231 575.1,273.6 547.4,274.2 546.9,230.8 	"/>
              <polygon fill="#2A2725" points="574.8,288.8 547.4,289.7 547.4,274.2 575.1,273.6 	"/>
              <polygon fill="#434442" points="460.5,284.5 461.4,292.7 474.5,291.9 474.5,284.5 	"/>
              <polygon fill="#566357" points="486.9,284.5 487.2,292.3 474.5,291.9 474.5,284.5 	"/>
              <polygon fill="#566357" points="501.5,284.8 502.1,292.9 487.2,292.3 486.9,284.5 	"/>
              <polygon fill="#465343" points="509.9,293.2 502.1,292.9 501.5,284.8 510.8,284.8 	"/>
              <polygon fill="#595542" points="510.4,290.3 521.4,290.1 520.1,284.5 510.8,284.8 	"/>
              <polygon fill="#465343" points="528.2,284.8 528.5,290.4 521.4,290.1 520.1,284.5 	"/>
              <polygon fill="#465343" points="539.1,284.8 539.7,291 528.5,290.4 528.2,284.8 	"/>
              <polygon fill="#D89D7D" points="447.7,284.2 447.4,291.9 461.4,292.7 460.5,284.5 	"/>
              <polygon fill="#9E7D3A" points="440.9,283.6 441.2,292.6 447.4,291.9 447.7,284.2 	"/>
              <polygon fill="#DFC7A9" points="431.4,283.2 431.6,291.9 438.7,292.3 441.2,292.6 440.9,283.6 	"/>
              <polygon fill="#D38E51" points="427.5,282.9 428.8,285.7 425.7,291 431.6,291.9 431.4,283.2 	"/>
              <polygon fill="#584443" points="418.2,282 427.5,282.9 428.8,285.7 425.7,291 419.8,291.3 	"/>
              <polygon fill="#081112" points="574.8,288.8 577,298.5 540.6,299.7 539.7,292 548.7,292.3 548,289.2 	"/>
              <polygon fill="#2A2725" points="539.1,287.9 547.5,287.9 548.7,292.3 539.7,292 	"/>
              <polygon fill="#0F2121" points="459.5,292.6 459.9,301.9 540.6,299.7 539.7,291 521.4,290.1 510.4,290.3 509.9,293.2 474.5,291.9 	
                "/>
              <polygon fill="#B37045" points="425.7,291 426.6,295.4 425.1,301 425.1,302.8 459.9,301.9 459.5,292.6 447.4,291.9 441.2,292.6 
                431.6,291.9 	"/>
              <polygon fill="#071B12" points="392.4,288.4 393,291.5 393.7,297.5 394.6,302.4 418.8,302 419.8,291.3 418.8,287 395.8,286.4 	"/>
              <polygon fill="#0F2121" points="425.1,302.8 418.8,302 419.8,291.3 425.7,291 426.6,295.4 424.9,300.3 	"/>
              <path fill="none" stroke="#76BBFF" strokeWidth="0.6214" strokeMiterlimit="10" d="M274.6,289.6"/>
              <polygon fill="#6A514E" points="276.5,290.1 276.5,293.2 280.9,293.2 277.8,300.3 324.7,300.6 324.1,289.5 347.7,288.5 
                347.1,277.2 334.5,274.7 272.6,273.9 274.4,276.3 274.7,282.2 275.9,284.2 275.9,287.4 274.6,289.6 	"/>
              <path fill="#271E12" d="M283.7,280.8c0,0,2.8,0.6,2.8,1.9c0,1.2,0.6,2.8,0.6,2.8l2.8,1.9l-2.5,2.2v2.2l-3.1-1.2l-3.4,2.8l-3.1,7.1
                l46.9,0.3l-0.6-11.2l-6.8,0.9l-6.8,0.9l-2.2-2.2l-7.1,2.5l-2.8-2.2l-2.2-3.7l-1.6-3.7v-4.4l-5.6-0.6L283.7,280.8z"/>
              <polygon fill="#56311E" points="347.1,277.2 294.6,277.7 294.6,282 296.1,285.7 298.3,289.5 301.1,291.6 308.2,289.1 310.4,291.3 
                324.1,289.5 347.7,288.5 	"/>
              <polygon fill="#8C605D" points="274.4,276.3 289,277 283.7,280.8 283.4,282.3 275.4,282.6 274.4,280.8 	"/>
              <polygon fill="#506B6A" points="408.3,234.5 417,234.8 416.7,253.1 408.6,252.8 	"/>
              <polygon fill="#657778" points="409.2,244 416.5,243.6 416.3,252.3 408.6,252.8 	"/>
              <polygon fill="#749289" points="429.5,235.3 429.7,252.7 436.8,252.9 436.6,234.9 	"/>
              <polygon fill="#435456" points="429.1,243.8 436.8,244 436.8,252.9 429.3,253.3 	"/>
              <polygon fill="#687568" points="470.3,236 470.7,252.9 477.4,252.9 477.2,235.8 	"/>
              <polygon fill="#2F3D36" points="471.7,246.1 471.6,251.9 476.5,252.1 476.4,245.9 	"/>
              <polygon fill="#DFDFDF" points="429.3,265.5 429.3,280.2 437.2,280.7 436.8,265.1 	"/>
              <polygon fill="#0F2121" points="430.3,266.4 430.3,273.2 436,273.1 436.1,266.6 	"/>
              <polygon fill="#435456" points="430.2,274.1 430.1,278.8 436.2,279.2 436,274.1 	"/>
              <polygon fill="#411F21" points="447.2,283.3 447.1,264.1 455.6,264.5 456,283.1 	"/>
              <polygon fill="#443233" points="445.9,262.6 458.7,262.8 458.9,283.8 456,283.1 455.6,264.5 447.1,264.1 	"/>
              <polygon fill="#533244" points="447.2,283.3 445.5,283.3 445.9,262.6 447.1,264.1 	"/>
              <polygon fill="#2A2725" points="470.9,265.9 476.9,265.9 477.2,279 470.9,279.4 	"/>
              <rect x="470.9" y="265.9" fill="#2F474B" width="6" height="7"/>
              <polygon fill="#687568" points="410,204.8 410,214.2 415.8,214.2 415.7,204.9 	"/>
              <polygon fill="#465343" points="410.1,209.8 415.8,209.8 415.8,214.2 410,214.2 	"/>
              <polygon fill="#8B9C92" points="429.5,204.5 429.9,220.4 436.8,220.2 436.6,204.4 	"/>
              <polygon fill="#657778" points="430.8,212.1 435.5,212.1 435.4,205.4 431,205.5 	"/>
              <polygon fill="#5B8784" points="431.2,213.3 435.3,213.1 435.6,219.3 430.8,219.3 	"/>
              <polygon fill="#999979" points="449.6,205 449.4,220.7 456.2,220.5 456.3,205.2 	"/>
              <polygon fill="#657778" points="450.4,212.3 455.2,212.3 455.6,206.1 450.6,206.3 	"/>
              <polygon fill="#434442" points="450.6,213.5 455.2,213.5 455.7,219.9 450.2,219.7 	"/>
              <polygon fill="#907051" points="470.3,205.7 470.5,220.6 477.2,220.6 477.2,205.9 	"/>
              <polygon fill="#676866" points="471.6,213.6 476.1,213.7 476.2,206.7 470.8,206.6 	"/>
              <polygon fill="#787767" points="471.4,214.8 471.1,219.8 476.2,219.8 476.2,214.5 	"/>
              <polygon fill="#8B9579" points="511,206.7 511.2,222.6 518.3,222.4 518.2,206.8 	"/>
              <polygon fill="#676866" points="511.9,215.6 517.3,215.7 517.3,221.5 511.9,221.8 	"/>
              <polygon fill="#59A5AA" points="512,207.7 517.5,207.5 517.3,215 512.1,214.8 	"/>
              <polygon fill="#2F474B" points="529.3,207 529.6,221.8 536.9,222 536.6,207.3 	"/>
              <polygon fill="#435456" points="530.5,214.6 536,214.6 536,208.4 530.2,207.9 	"/>
              <polygon fill="#566357" points="530.4,215.6 530.4,221 535.8,221.2 535.9,215.4 	"/>
              <polygon fill="#796544" points="327.2,301 334.6,303.1 394.6,302.4 392.4,288.4 348.9,288.5 324.1,289.5 324.7,300.6 	"/>
              <polygon fill="#081112" points="347.1,285.6 347.7,288.5 392.4,288.4 395.8,286.4 	"/>
              <polygon fill="#081112" points="245.6,287.1 241.8,288.7 243.1,294.1 240.6,296.6 242.3,302.8 248.1,301.6 247.6,299.5 
                262.6,299.5 267.9,299.5 267.5,293.3 266.2,289.5 262.6,289.6 262.6,288 258.1,286.4 255.3,288.1 253.2,286.8 247.6,287.3 	"/>
              <polygon fill="#7A4218" points="277.8,300.3 272.9,299.1 273.3,295.8 276.5,293.2 280.9,293.2 	"/>
              <polygon fill="#441009" points="271.7,290.8 272.9,299.1 276.5,293.2 276.5,290.1 	"/>
              <polygon fill="#A45628" points="267.9,299.5 272.9,299.1 271.7,290.8 268.9,290.5 267.5,293.3 	"/>
              <polygon fill="#C24623" points="235.2,289.6 234.4,296.2 240.6,296.6 243.1,294.1 241.8,288.7 	"/>
              <polygon fill="#A45628" points="231.1,295.4 231.5,297.8 235.6,302 242.3,302.8 240.6,296.6 234.4,296.2 	"/>
              <polygon fill="#B77766" points="384.1,204.9 387.9,204.6 388.2,225.3 384,225.5 	"/>
              <path fill="#96B2CF" d="M309.9,256.9l5.4-0.2c0,0,1.5-9.1,8.4-9.7l-7.2,0.5C316.5,247.5,310,248.8,309.9,256.9z"/>
              <polygon fill="#D8755B" points="330.6,196 315.9,222.3 316,227.6 346,226.5 344.3,223 344.3,220.5 346.3,220.6 	"/>
              <polygon fill="#260C05" points="270.2,240.5 271,241.9 231.8,245.6 231.9,243.6 	"/>
              <polygon fill="#A9AC99" points="394.3,198.4 393.7,200.4 362.9,148.4 363.4,147.4 	"/>
              <polygon fill="#EDD3B3" points="373.5,147.6 402.1,196.6 401.1,197.2 372.5,147.6 	"/>
              <polygon fill="#EDD3B3" points="382.4,148 411,197 410,197.6 381.5,148 	"/>
              <polygon fill="#EDD3B3" points="391.1,148.4 419.7,197.4 418.7,198 390.2,148.4 	"/>
              <polygon fill="#EDD3B3" points="399.4,149.1 428,198 427,198.6 398.4,149.1 	"/>
              <polygon fill="#EDD3B3" points="407.4,149.7 436,198.6 435.1,199.2 406.5,149.7 	"/>
              <polygon fill="#EDD3B3" points="415.7,149.5 444.3,198.4 443.4,199 414.8,149.5 	"/>
              <polygon fill="#EDD3B3" points="424,149.9 452.6,198.8 451.7,199.5 423.1,149.9 	"/>
              <polygon fill="#EDD3B3" points="432.5,150.5 461.1,199.5 460.2,200.1 431.6,150.5 	"/>
              <polygon fill="#EDD3B3" points="441.8,150.7 470.4,199.7 469.5,200.3 440.9,150.7 	"/>
              <polygon fill="#EDD3B3" points="449.3,150.5 477.9,199.5 476.9,200.1 448.4,150.5 	"/>
              <polygon fill="#EDD3B3" points="457,151.1 485.5,200.1 484.6,200.7 456,151.1 	"/>
              <polygon fill="#EDD3B3" points="465,151.8 493.6,200.7 492.7,201.3 464.1,151.8 	"/>
              <polygon fill="#EDD3B3" points="473.5,152.2 502.1,201.1 501.2,201.7 472.6,152.2 	"/>
              <polygon fill="#EDD3B3" points="481.4,152.2 510,201.1 509.1,201.7 480.5,152.2 	"/>
              <polygon fill="#EDD3B3" points="489.5,152.8 518.1,201.7 517.1,202.4 488.5,152.8 	"/>
              <polygon fill="#EDD3B3" points="497.8,153.2 526.4,202.1 525.4,202.8 496.8,153.2 	"/>
              <polygon fill="#EDD3B3" points="506.5,153.6 535.1,202.6 534.1,203.2 505.5,153.6 	"/>
              <polygon fill="#EDD3B3" points="514.8,154 543.3,203 542.4,203.6 513.8,154 	"/>
              <polygon fill="#EDD3B3" points="521.8,153.8 550.4,202.8 549.4,203.4 520.9,153.8 	"/>
              <polygon fill="#DCD7AA" points="439.9,171.8 446,181.6 453.5,181.6 447.7,171.4 	"/>
              <polygon fill="#F7E0B7" points="558.4,186 555.2,186.8 548.1,186.1 554.6,185.5 	"/>
              <polygon fill="#081112" points="387.5,201.4 383.9,202.2 383.9,225.7 382.5,225.8 382.6,201.1 387.5,200.6 	"/>
              <polygon fill="#E7B475" points="387.7,201.1 384,202.2 383.9,205 387.9,204.6 	"/>
              <polygon fill="#46141D" points="385.7,196 385.9,198.8 384.9,197.5 378.4,197.5 378.5,195.7 	"/>
              <polygon fill="#F4DFC4" points="377.6,195.7 378.5,195.7 378.4,197.5 377.5,197.5 	"/>
              <polygon fill="#749289" points="471.4,237.6 471.4,245.2 476.1,244.8 475.9,237.2 	"/>
            </g>
            <g id={styles.steam3}>
              <polygon fill="#D7DDDC" points="252.8,96.2 256.3,88.3 268.3,87.3 277.7,83.8 283.8,90.9 291.3,95.1 287.8,103.5 273.5,104.2 
                268.1,102.8 259.9,104.2 253.5,102.3 	"/>
              <polygon fill="#F7F9F9" points="268.3,87.3 276.3,93.2 277.7,83.8 	"/>
              <polygon fill="#E6EEEF" points="283.8,90.9 276.3,93.2 277.7,83.8 	"/>
              <polygon fill="#BCC3C4" points="259.9,104.2 265.5,99.3 268.1,102.8 	"/>
              <polygon fill="#F7F9F9" points="287.8,103.5 281.2,98.1 291.3,95.1 	"/>
              <polygon fill="#DAE4E5" points="256.3,88.3 266.4,95.5 268.3,87.3 	"/>
              <polygon fill="#DAE4E5" points="276.3,93.2 281.2,98.1 291.3,95.1 283.8,90.9 	"/>
              <polygon fill="#EAEFEF" points="265.5,99.3 268.1,102.8 276.3,93.2 268.3,87.3 	"/>
              <polygon fill="#F2F7F3" points="256.3,88.3 252.8,96.2 265.5,99.3 266.4,95.5 	"/>
              <polygon fill="#F7F9F9" points="252.8,96.2 266.4,95.5 256.3,88.3 	"/>
              <polygon fill="#DAE4E5" points="266.4,95.5 252.8,96.2 265.5,99.3 	"/>
              <polygon fill="#BCC3C4" points="281.2,98.1 273.5,104.2 287.8,103.5 	"/>
            </g>
            <g id={styles.steam2}>
              <polygon fill="#D7DDDC" points="252.8,96.2 256.3,88.3 268.3,87.3 277.7,83.8 283.8,90.9 291.3,95.1 287.8,103.5 273.5,104.2 
                268.1,102.8 259.9,104.2 253.5,102.3 	"/>
              <polygon fill="#F7F9F9" points="268.3,87.3 276.3,93.2 277.7,83.8 	"/>
              <polygon fill="#E6EEEF" points="283.8,90.9 276.3,93.2 277.7,83.8 	"/>
              <polygon fill="#BCC3C4" points="259.9,104.2 265.5,99.3 268.1,102.8 	"/>
              <polygon fill="#F7F9F9" points="287.8,103.5 281.2,98.1 291.3,95.1 	"/>
              <polygon fill="#DAE4E5" points="256.3,88.3 266.4,95.5 268.3,87.3 	"/>
              <polygon fill="#DAE4E5" points="276.3,93.2 281.2,98.1 291.3,95.1 283.8,90.9 	"/>
              <polygon fill="#EAEFEF" points="265.5,99.3 268.1,102.8 276.3,93.2 268.3,87.3 	"/>
              <polygon fill="#F2F7F3" points="256.3,88.3 252.8,96.2 265.5,99.3 266.4,95.5 	"/>
              <polygon fill="#F7F9F9" points="252.8,96.2 266.4,95.5 256.3,88.3 	"/>
              <polygon fill="#DAE4E5" points="266.4,95.5 252.8,96.2 265.5,99.3 	"/>
              <polygon fill="#BCC3C4" points="281.2,98.1 273.5,104.2 287.8,103.5 	"/>
            </g>
            <g id={styles.steam1}>
              <polygon fill="#D7DDDC" points="253.2,95.9 256.7,87.9 268.7,87 278,83.5 284.1,90.5 291.7,94.7 288.1,103.2 273.8,103.9 
                268.4,102.5 260.2,103.9 253.9,102 	"/>
              <polygon fill="#F7F9F9" points="268.7,87 276.6,92.9 278,83.5 	"/>
              <polygon fill="#E6EEEF" points="284.1,90.5 276.6,92.9 278,83.5 	"/>
              <polygon fill="#BCC3C4" points="260.2,103.9 265.8,99 268.4,102.5 	"/>
              <polygon fill="#F7F9F9" points="288.1,103.2 281.6,97.8 291.7,94.7 	"/>
              <polygon fill="#DAE4E5" points="256.7,87.9 266.8,95.2 268.7,87 	"/>
              <polygon fill="#DAE4E5" points="276.6,92.9 281.6,97.8 291.7,94.7 284.1,90.5 	"/>
              <polygon fill="#EAEFEF" points="265.8,99 268.4,102.5 276.6,92.9 268.7,87 	"/>
              <polygon fill="#F2F7F3" points="256.7,87.9 253.2,95.9 265.8,99 266.8,95.2 	"/>
              <polygon fill="#F7F9F9" points="253.2,95.9 266.8,95.2 256.7,87.9 	"/>
              <polygon fill="#DAE4E5" points="266.8,95.2 253.2,95.9 265.8,99 	"/>
              <polygon fill="#BCC3C4" points="281.6,97.8 273.8,103.9 288.1,103.2 	"/>
            </g>
          </svg>
          </Wrapper>
    </div>
    );
  }
}


const Wrapper = styled.div`
  .factorySvg {
    width: 70vw;
    height: 70vh;
  }
`;
export default Home;