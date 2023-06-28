import "./svg.css";
function LinkedIn(): JSX.Element {
  return (
    <svg
      className="socials linkedin"
      xmlns="http://www.w3.org/2000/svg"
      width="45.287"
      height="45.287"
      viewBox="0 0 45.287 45.287"
    >
      <filter id="linkedin-change-color">
        <feColorMatrix
          colorInterpolationFilters="sRGB"
          type="matrix"
          values="0.98 0   0   0   0
                  0   0  0   0   0
                  0   0   0  0   0
                  0   0   0   1   0 "
        />
      </filter>
      <path
        id="Icon_awesome-linkedin"
        data-name="Icon awesome-linkedin"
        d="M42.052,2.25H3.225A3.249,3.249,0,0,0,0,5.515V44.272a3.249,3.249,0,0,0,3.225,3.265H42.052a3.257,3.257,0,0,0,3.235-3.265V5.515A3.257,3.257,0,0,0,42.052,2.25ZM13.687,41.068H6.975V19.455H13.7V41.068ZM10.331,16.5a3.892,3.892,0,1,1,3.892-3.892A3.894,3.894,0,0,1,10.331,16.5ZM38.848,41.068H32.136V30.555c0-2.507-.051-5.732-3.488-5.732-3.5,0-4.033,2.729-4.033,5.55v10.7H17.9V19.455h6.439v2.952h.091a7.07,7.07,0,0,1,6.358-3.488c6.793,0,8.057,4.478,8.057,10.3Z"
        transform="translate(0 -2.25)"
        fill="#fff"
      />
    </svg>
  );
}

export default LinkedIn;
