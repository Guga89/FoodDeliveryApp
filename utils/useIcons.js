const useIcons = () => {
  const home = {
    link: '/home',
    name: 'Home',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        className="bi bi-shop"
        viewBox="0 0 16 16"
      >
        <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z" />
      </svg>
    ),
  };
  const account = {
    link: '/account',
    name: 'My Account',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        className="bi bi-person-circle"
        viewBox="0 0 16 16"
      >
        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
        <path
          fillRule="evenodd"
          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
        />
      </svg>
    ),
  };
  const menu = {
    link: '/menu',
    name: 'Menu',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ionicon"
        width="30"
        height="30"
        viewBox="0 0 512 512"
      >
        <title>Fast Food</title>
        <path
          d="M322 416c0 35.35-20.65 64-56 64H134c-35.35 0-56-28.65-56-64M336 336c17.67 0 32 17.91 32 40h0c0 22.09-14.33 40-32 40H64c-17.67 0-32-17.91-32-40h0c0-22.09 14.33-40 32-40"
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="30"
        />
        <path
          d="M344 336H179.31a8 8 0 00-5.65 2.34l-26.83 26.83a4 4 0 01-5.66 0l-26.83-26.83a8 8 0 00-5.65-2.34H56a24 24 0 01-24-24h0a24 24 0 0124-24h288a24 24 0 0124 24h0a24 24 0 01-24 24zM64 276v-.22c0-55 45-83.78 100-83.78h72c55 0 100 29 100 84v-.22M241 112l7.44 63.97"
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="30"
        />
        <path
          d="M256 480h139.31a32 32 0 0031.91-29.61L463 112"
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="30"
        />
        <path
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="30"
          d="M368 112l16-64 47-16"
        />
        <path
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="30"
          d="M224 112h256"
        />
      </svg>
    ),
  };
  const takeAway = {
    link: '/take-aways',
    name: 'Take aways',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        className="bi bi-bag"
        viewBox="0 0 16 16"
      >
        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
      </svg>
    ),
  };
  const trash = {
    link: '',
    name: 'Clear',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        className="bi bi-trash"
        viewBox="0 0 16 16"
      >
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
        <path
          fillRule="evenodd"
          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
        />
      </svg>
    ),
  };
  const order = {
    link: '',
    name: 'Clear',
    icon: (
      <svg
        id="Layer_1"
        enableBackground="new 0 0 512 512"
        height="30"
        viewBox="0 0 512 512"
        width="30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path
            d="m363.58 50.01v411.98c0 27.58-22.45 50.01-50.03 50.01h-215.1c-27.58 0-50.03-22.43-50.03-50.01v-411.98c0-27.58 22.45-50.01 50.03-50.01h215.1c27.58 0 50.03 22.43 50.03 50.01z"
            fill="#56788b"
          />
          <path
            d="m363.58 50.01v411.98c0 27.58-22.45 50.01-50.03 50.01h-215.1c-27.58 0-50.03-22.43-50.03-50.01v-27.8c0 27.57 22.45 50 50.03 50h185.08c27.59 0 50.03-22.43 50.03-50v-384.18c0-27.58-22.44-50.01-50.03-50.01h30.02c27.58 0 50.03 22.43 50.03 50.01z"
            fill="#415e6f"
          />
          <path
            d="m333.56 49.52v412.96c0 11.59-9.43 21.02-21.02 21.02h-213.08c-11.59 0-21.02-9.43-21.02-21.02v-412.96c0-11.59 9.43-21.02 21.02-21.02h36c4.14 0 7.5 3.36 7.5 7.5 0 5.98 4.87 10.85 10.86 10.85h104.36c5.99 0 10.86-4.87 10.86-10.85 0-4.14 3.36-7.5 7.5-7.5h36c11.59 0 21.02 9.43 21.02 21.02z"
            fill="#fdeda5"
          />
          <g>
            <path
              d="m333.56 49.52v412.96c0 11.609-9.411 21.02-21.02 21.02h-213.08c-11.609 0-21.02-9.411-21.02-21.02v-30c0 11.59 9.43 21.02 21.02 21.02h147.29c13.57 0 19.77-16.93 9.41-25.69l-26.749-22.631c-3.113-2.634-7.058-4.079-11.135-4.079h-43.866c-30.922 0-55.99-25.068-55.99-55.99v-221.77c0-30.922 25.068-55.99 55.99-55.99h111.32c9.847 0 17.83-7.983 17.83-17.83 0-11.59-9.43-21.02-21.02-21.02h30c11.609 0 21.02 9.411 21.02 21.02z"
              fill="#fbdf63"
            />
          </g>
          <path
            d="m248.175 438.5h-84.35c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h84.35c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"
            fill="#56788b"
          />
          <path
            d="m463.58 123.34v221.77c0 14.33-11.66 25.99-25.99 25.99h-61.23l-65.5 55.81c-1.4 1.19-3.13 1.79-4.86 1.79s-3.46-.6-4.86-1.79l-65.5-55.81h-61.23c-14.33 0-25.99-11.66-25.99-25.99v-221.77c0-14.33 11.66-25.99 25.99-25.99h263.18c14.33 0 25.99 11.66 25.99 25.99z"
            fill="#ed2061"
          />
          <g>
            <path
              d="m295.744 132.231c-4.142 0-7.5 3.358-7.5 7.5v48.037c0 9.778-6.27 18.119-15 21.215v-69.252c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v69.252c-8.73-3.095-15-11.436-15-21.215v-48.037c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v48.037c0 18.11 12.904 33.262 30 36.746v20.518h15v-20.518c17.096-3.484 30-18.636 30-36.746v-48.037c0-4.142-3.358-7.5-7.5-7.5z"
              fill="#fff"
            />
            <path
              d="m265.744 237.532c-12.407 0-22.5 10.093-22.5 22.5v59.288c0 12.407 10.093 22.5 22.5 22.5s22.5-10.093 22.5-22.5v-59.288c0-12.407-10.094-22.5-22.5-22.5z"
              fill="#fbdf63"
            />
          </g>
          <path
            d="m376.256 132.231c-26.191 0-47.5 21.308-47.5 47.5v58.038c0 4.142 3.358 7.5 7.5 7.5h12.5v19.764h15v-19.764h12.5c4.142 0 7.5-3.358 7.5-7.5v-98.037c0-4.143-3.358-7.501-7.5-7.501z"
            fill="#fff"
          />
          <path
            d="m356.256 257.532c-12.407 0-22.5 10.093-22.5 22.5v39.288c0 12.407 10.093 22.5 22.5 22.5s22.5-10.093 22.5-22.5v-39.288c0-12.407-10.093-22.5-22.5-22.5z"
            fill="#fbdf63"
          />
          <path
            d="m463.58 123.34v221.77c0 14.33-11.66 25.99-25.99 25.99h-30c14.33 0 25.99-11.66 25.99-25.99v-221.77c0-14.33-11.66-25.99-25.99-25.99h30c14.33 0 25.99 11.66 25.99 25.99z"
            fill="#c71e54"
          />
        </g>
      </svg>
    ),
  };
  const order2 = {
    link: '',
    name: 'Clear',
    icon: (
      <svg
        id="Layer_1"
        height="30"
        viewBox="0 0 80 80"
        width="30"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        dataName="Layer 1"
      >
        <path d="m68.984 61.223h-53.373a1 1 0 0 1 -.919-.607l-3.016-7.038a1 1 0 0 1 .919-1.393h59.405a1 1 0 0 1 .919 1.393l-3.019 7.038a1 1 0 0 1 -.916.607zm-52.713-2h52.054l2.158-5.038h-56.371z" />
        <path d="m66.871 54.184a1 1 0 0 1 -1-1 22.755 22.755 0 0 0 -22.729-22.729h-1.689a22.754 22.754 0 0 0 -22.728 22.729 1 1 0 0 1 -2 0 24.756 24.756 0 0 1 24.728-24.729h1.689a24.757 24.757 0 0 1 24.729 24.729 1 1 0 0 1 -1 1z" />
        <path d="m55.109 38.536a1 1 0 0 1 -.608-.206 18.6 18.6 0 0 0 -5.725-2.987 1 1 0 1 1 .6-1.906 20.6 20.6 0 0 1 6.338 3.306 1 1 0 0 1 -.609 1.793z" />
        <path d="m59.616 43.377a1 1 0 0 1 -.837-.45 18.884 18.884 0 0 0 -1.351-1.808 1 1 0 0 1 1.527-1.291 20.789 20.789 0 0 1 1.5 2 1 1 0 0 1 -.834 1.55z" />
        <path d="m42.3 30.455a1 1 0 0 1 -1-1v-2.64a1 1 0 1 1 2 0v2.64a1 1 0 0 1 -1 1z" />
        <path d="m42.3 27.815a4.519 4.519 0 1 1 4.516-4.515 4.524 4.524 0 0 1 -4.516 4.515zm0-7.038a2.519 2.519 0 1 0 2.516 2.523 2.522 2.522 0 0 0 -2.516-2.523z" />
        <path d="m25.54 29.135h-13.071a1 1 0 1 1 0-2h13.071a1 1 0 0 1 0 2z" />
        <path d="m19.005 35.39h-11.005a1 1 0 0 1 0-2h11.005a1 1 0 0 1 0 2z" />
        <path d="m14.48 42.319h-6.48a1 1 0 0 1 0-2h6.48a1 1 0 1 1 0 2z" />
      </svg>
    ),
  };
  const cancel = {
    link: '',
    name: 'Cancel',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        className="bi bi-x-lg"
        viewBox="0 0 16 16"
      >
        <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
      </svg>
    ),
  };
  const cart = {
    link: '',
    name: 'Cancel',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        fill="currentColor"
        className="bi bi-basket2"
        viewBox="0 0 16 16"
      >
        <path d="M4 10a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0v-2zm3 0a1 1 0 1 1 2 0v2a1 1 0 0 1-2 0v-2z" />
        <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-.623l-1.844 6.456a.75.75 0 0 1-.722.544H3.69a.75.75 0 0 1-.722-.544L1.123 8H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.163 8l1.714 6h8.246l1.714-6H2.163z" />
      </svg>
    ),
  };
  const deliveryMan = {
    link: '',
    name: 'Cancel',
    icon: (
      <svg
        id="Capa_1"
        enableBackground="new 0 0 512 512"
        fill="currentColor"
        height="30"
        viewBox="0 0 512 512"
        width="30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path d="m484.827 157.974h-86.825c-14.983 0-27.173 12.196-27.173 27.188v99.934h-32.476c1.805-6.561 2.474-14.3 2.035-23.306v-.001c-.705-38.059-7.611-70.135-20.528-95.337-10.03-19.567-21.735-31.298-31.779-38.311 11.789-12.121 18.605-29.364 18.605-49.251 0-35.781-28.543-64.89-63.626-64.89s-63.626 29.109-63.626 64.89c0 4.143 3.358 7.5 7.5 7.5h5.096c-.469 2.83-.719 5.714-.719 8.643 0 25.216 18.018 46.291 41.84 51.014-2.497 9.272-3.738 20.205-3.733 32.625l-18.706 16.089-45.515 3.681-52.503-17.356c-4.812-1.6-10.266-3.408-14.998.004-4.663 3.365-4.663 9.256-4.663 11.191v39.035c0 4.143 3.358 7.5 7.5 7.5h8.929l-13.695 47.324c-1.151 3.978 1.141 8.138 5.12 9.289 3.981 1.157 8.138-1.141 9.29-5.119l14.902-51.494h21.322c-26.52 80.872-11.388 134.854 11.871 189.485h-13.482l-56.153-62.786 11.874-41.02c1.152-3.979-1.14-8.138-5.119-9.289s-8.138 1.141-9.29 5.119l-11.357 39.237c-35.126-.586-66.546 23.632-74.553 58.475-.927 4.036 1.592 8.06 5.627 8.988l10.647 2.45c-2.72 28.252 15.885 54.907 44.259 61.438 4.309.993 8.655 1.483 12.971 1.483 10.644 0 21.101-2.984 30.35-8.781 10.855-6.802 18.943-16.802 23.32-28.62l8.401 1.933c2.503.579 4.877.872 7.249-.405 2.207-1.188 3.674-3.333 4.224-5.754.528-2.455.93-4.95 1.209-7.468h156.858c5.016 31.187 31.551 54.696 63.242 54.696s58.227-23.509 63.243-54.696h5.724s1.136.013 1.395.013c2.145 0 5.243-.238 7.787-2.826 1.273-1.295 2.767-3.612 2.652-7.293-.211-7.043-1.268-13.848-3.072-20.316 5.974-36.268.226-58.357-8.295-75.644 5.387-3.531 8.959-9.615 8.959-16.527v-20.613h37.883c14.983 0 27.173-12.196 27.173-27.188v-87.746c.002-14.991-12.187-27.187-27.171-27.187zm-388.746 312.933c-9.601 6.017-20.961 7.93-31.989 5.391h-.001c-20.298-4.672-33.84-23.285-32.853-43.411l81.353 18.724c-3.366 7.925-9.061 14.628-16.51 19.296zm37.528-29.866-116.665-26.846c9.003-24.654 33.231-40.974 59.714-39.57l57.151 63.901c-.05.843-.116 1.681-.2 2.515zm113.285-130.695c-2.177 5.742-2.177 12.821-2.177 22.62v28.302h-27.463v-38.828c0-43.898 23.958-51.721 34.71-53.012h73.529c-.296 9.963-2.544 17.045-6.812 21.54-4.974 5.238-13.485 7.79-26.021 7.802l-26.921.028c-9.6.001-15.94 3.885-18.845 11.548zm-2.177 65.921v17.908c-.068 0-.138 0-.21 0h-53.273c.599-5.554 2.329-9.852 5.17-12.826 4.226-4.422 10.178-5.082 13.35-5.082zm80.445-121.838h-68.207c-2.739-8.619-5.181-18.057-7.189-27.757l20.737-13.46c11.32-7.351 17.209-17.738 16.157-28.499-.932-9.539-7.417-18.06-16.521-21.707-8.314-3.33-17.263-2.284-25.172 2.773.652-7.174 1.866-13.578 3.622-19.014 3.197-.33 6.372-.955 9.49-1.872 6.347-1.474 12.212-3.823 17.507-6.938 14.445 8.63 46.215 36.622 49.576 116.474zm-130.179-183.038c3.537-23.964 23.749-42.39 48.077-42.39 26.812 0 48.626 22.381 48.626 49.89 0 22.374-10.729 40.407-28.029 48.343v-39.463c0-6.833-2.615-15.215-15.069-16.349-.226-.021-.453-.031-.68-.031zm11.329 23.643c0-2.96.337-5.851 1-8.643h40.228c.463.05.801.104 1.043.153.039.278.073.678.073 1.227v43.876c-1.787.263-3.585.396-5.382.397-.017 0-.034 0-.05 0-20.356-.019-36.912-16.614-36.912-37.01zm-9.723 115.92 17.764-1.437c1.583-.127 3.084-.754 4.289-1.789l32.06-27.575.005-.005c3.1-2.671 6.409-4.041 9.631-4.041 1.434 0 2.851.272 4.224.822 3.963 1.587 6.777 5.215 7.171 9.241.495 5.067-2.843 10.203-9.396 14.459l-35.725 23.188h-30.021v-12.863zm-31.696 2.564 16.696-1.35v11.651h-19.401c-2.515 0-3.128-2.09-3.2-3.843-.041-.994.053-5.978 5.905-6.458zm-17.751-5.178c-2.259 3.704-3.314 8.037-3.141 12.25.045 1.091.184 2.142.378 3.166 0 .021-.012.042-.008.062h-36.336v-28.473l39.136 12.937c-.012.02-.018.039-.029.058zm15.088 30.478h66.601c1.449 0 2.868-.42 4.083-1.209l3.395-2.204c1.633 7.218 3.493 14.242 5.519 20.876-15.296 4.515-39.575 19.106-39.575 66.158v39.581c-5.262 1.062-11.487 3.516-16.694 8.965-5.489 5.744-8.624 13.527-9.376 23.189h-15.13c-15.246-43.938-21.044-90.694 1.177-155.356zm12.362 189.458c-2.772-6.375-5.444-12.726-7.96-19.101h77.874c10.093 0 15.21-4.595 15.21-13.656v-26.752-28.302h59.199c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-59.145c.096-4.26.369-7.744 1.15-9.802.379-1.001.707-1.865 4.826-1.865l26.928-.028c16.865-.016 28.93-4.096 36.885-12.474.368-.388.716-.795 1.065-1.2h47.706 53.615v20.613c0 2.578-2.173 4.756-4.745 4.756h-74.665c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h70.258c5.928 11.003 11.26 24.694 10.943 46.325-14.838-20.611-38.859-33.864-66.121-33.864-21.894 0-42.438 8.588-57.849 24.183-13.675 13.837-21.888 31.796-23.578 51.192zm193.958 54.723c-23.446 0-43.22-16.893-48.004-39.696h96.008c-4.785 22.801-24.559 39.696-48.004 39.696zm56.524-54.696h-113.046-10.775c3.682-33.913 32.038-60.377 66.362-60.377 30.135 0 55.442 19.871 63.823 47.688.027.088.054.176.084.263 1.185 3.991 2.022 8.145 2.475 12.426zm71.926-155.395c0 6.721-5.461 12.188-12.173 12.188h-98.998v-38.731h111.171zm0-41.543h-111.171v-15.951h111.171zm0-30.951h-111.171v-15.252c0-6.721 5.461-12.188 12.173-12.188h86.825c6.712 0 12.173 5.468 12.173 12.188z" />
        </g>
      </svg>
    ),
  };
  const home2 = {
    link: '/',
    name: 'Home',
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.73049 2.78823C11.0005 1.77923 12.7805 1.73923 14.0895 2.66823L14.2505 2.78823L20.3395 7.65923C21.0095 8.17823 21.4205 8.94923 21.4905 9.78823L21.5005 9.98923V18.0982C21.5005 20.1882 19.8495 21.8882 17.7805 21.9982H15.7905C14.8395 21.9792 14.0705 21.2392 14.0005 20.3092L13.9905 20.1682V17.3092C13.9905 16.9982 13.7595 16.7392 13.4505 16.6882L13.3605 16.6782H10.6895C10.3705 16.6882 10.1105 16.9182 10.0705 17.2182L10.0605 17.3092V20.1592C10.0605 20.2182 10.0495 20.2882 10.0405 20.3382L10.0305 20.3592L10.0195 20.4282C9.90049 21.2792 9.20049 21.9282 8.33049 21.9892L8.20049 21.9982H6.41049C4.32049 21.9982 2.61049 20.3592 2.50049 18.2982V9.98923C2.50949 9.13823 2.88049 8.34823 3.50049 7.79823L9.73049 2.78823ZM13.3805 3.87823C12.6205 3.26823 11.5405 3.23923 10.7405 3.76823L10.5895 3.87823L4.50949 8.77923C4.16049 9.03823 3.95049 9.42823 3.90049 9.83823L3.88949 9.99823V18.0982C3.88949 19.4282 4.92949 20.5182 6.25049 20.5982H8.20049C8.42049 20.5982 8.61049 20.4492 8.63949 20.2392L8.66049 20.0592L8.67049 20.0082V17.3092C8.67049 16.2392 9.49049 15.3692 10.5405 15.2882H13.3605C14.4295 15.2882 15.2995 16.1092 15.3805 17.1592V20.1682C15.3805 20.3782 15.5305 20.5592 15.7305 20.5982H17.5895C18.9295 20.5982 20.0195 19.5692 20.0995 18.2582L20.1105 18.0982V9.99823C20.0995 9.56923 19.9205 9.16823 19.6105 8.86923L19.4805 8.75823L13.3805 3.87823Z"
          fill="current"
        />
      </svg>
    ),
  };
  const notification = {
    link: '/notification',
    name: 'Notifications',
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.608 19.6906C14.9045 19.9321 14.9515 20.3713 14.7129 20.6715C14.5366 20.8935 14.3327 21.0922 14.1167 21.255C13.3891 21.826 12.464 22.0849 11.5453 21.9754C10.6258 21.8659 9.787 21.3962 9.21459 20.6689C8.9774 20.3676 9.02646 19.9286 9.32418 19.6885C9.62189 19.4484 10.0555 19.4981 10.2927 19.7995C10.6379 20.2381 11.1467 20.523 11.7064 20.5896C12.2669 20.6564 12.8307 20.4986 13.2826 20.1443C13.4158 20.0437 13.5355 19.927 13.6389 19.7969C13.8775 19.4967 14.3114 19.4491 14.608 19.6906ZM5.15213 8.99974L5.16444 8.40391C5.17324 8.14906 5.18686 7.91248 5.20685 7.68096C5.50654 4.44456 8.59565 2 11.9648 2H12.0361C15.4034 2 18.4934 4.44285 18.8034 7.68536C18.8212 7.89148 18.8288 8.07458 18.8311 8.33206L18.832 9.11982C18.8327 9.19158 18.8339 9.25469 18.8358 9.31353L18.845 9.50977L18.8896 9.69688C19.0303 10.218 19.2776 10.7052 19.6162 11.1282L19.7669 11.3055L19.8286 11.3847C20.2348 11.9917 20.4668 12.698 20.5 13.4587L20.499 13.862C20.4707 14.763 20.1399 15.6331 19.5338 16.3582C18.7311 17.2101 17.6434 17.7393 16.4873 17.8457C13.502 18.1699 10.49 18.1699 7.51296 17.8466C6.34896 17.7346 5.26444 17.2069 4.42663 16.3223C3.80882 15.5691 3.48041 14.6208 3.5009 13.6624L3.50175 13.4242C3.53744 12.6955 3.76804 11.9898 4.16936 11.3802L4.23653 11.2938C4.70525 10.7799 5.02569 10.151 5.16473 9.47306L5.14969 9.53395L5.15213 8.99974ZM12.0361 3.39535H11.9648C9.26651 3.39535 6.80804 5.34087 6.57967 7.80678C6.56798 7.94228 6.55866 8.08207 6.55137 8.2292L6.53532 8.69559L6.52879 9.61486L6.51441 9.75667C6.32444 10.683 5.88728 11.5409 5.24929 12.2404L5.29856 12.1833L5.21045 12.3291C5.04539 12.6265 4.9389 12.9495 4.89682 13.2682L4.87935 13.4587L4.87919 13.6774C4.86568 14.3142 5.08086 14.9356 5.45369 15.3931C6.02881 15.9985 6.80682 16.377 7.65168 16.4583C10.5393 16.7719 13.4527 16.7719 16.3514 16.4572C17.1871 16.3802 17.9645 16.002 18.5084 15.4267C18.92 14.933 19.1375 14.3097 19.1216 13.6536L19.1224 13.4901C19.1013 13.0186 18.951 12.5613 18.6873 12.1672L18.7026 12.1926L18.5647 12.0309C18.0893 11.4441 17.744 10.7635 17.5517 10.034L17.4868 9.75818L17.4739 9.66551C17.4642 9.53013 17.4585 9.40982 17.4555 9.26514L17.4528 8.3605C17.4509 8.13044 17.4447 7.97558 17.4307 7.81326C17.1944 5.34075 14.7336 3.39535 12.0361 3.39535Z"
          fill="currentColor"
        />
      </svg>
    ),
  };

  const signOut = {
    link: '/sign-out',
    name: 'Log Out',
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.331 2.02148C13.7102 2.02148 15.6521 3.89542 15.7611 6.24772L15.766 6.45648V7.38948C15.766 7.8037 15.4302 8.13948 15.016 8.13948C14.6363 8.13948 14.3225 7.85733 14.2728 7.49125L14.266 7.38948V6.45648C14.266 4.89358 13.044 3.61575 11.5034 3.52647L11.331 3.52148H6.45597C4.89392 3.52148 3.61623 4.74362 3.52696 6.28406L3.52197 6.45648V17.5865C3.52197 19.1493 4.74388 20.4272 6.28363 20.5165L6.45597 20.5215H11.341C12.8983 20.5215 14.172 19.3039 14.261 17.7693L14.266 17.5975V16.6545C14.266 16.2403 14.6018 15.9045 15.016 15.9045C15.3957 15.9045 15.7095 16.1866 15.7591 16.5527L15.766 16.6545V17.5975C15.766 19.9687 13.8992 21.9046 11.5553 22.0164L11.341 22.0215H6.45597C4.07753 22.0215 2.13581 20.1474 2.0268 17.7952L2.02197 17.5865V6.45648C2.02197 4.07743 3.89573 2.13535 6.24728 2.02631L6.45597 2.02148H11.331ZM19.326 8.50234L19.4103 8.57478L22.3383 11.4898C22.3647 11.5159 22.3878 11.5426 22.409 11.5707L22.3383 11.4898C22.3689 11.5202 22.3963 11.5526 22.4205 11.5865C22.4376 11.6103 22.4533 11.6354 22.4676 11.6614C22.4702 11.6665 22.4728 11.6715 22.4754 11.6764C22.4881 11.7004 22.4993 11.7253 22.5092 11.7508C22.5132 11.762 22.5173 11.7733 22.5211 11.7847C22.5284 11.8058 22.5345 11.8274 22.5397 11.8494C22.5421 11.8612 22.5445 11.8729 22.5467 11.8846C22.5508 11.905 22.5538 11.9261 22.5559 11.9474C22.557 11.9623 22.558 11.977 22.5586 11.9917C22.5593 12.0016 22.5595 12.0115 22.5595 12.0214L22.5586 12.0497C22.5581 12.0651 22.557 12.0805 22.5555 12.0958L22.5595 12.0214C22.5595 12.0682 22.5552 12.1141 22.547 12.1585C22.5445 12.1696 22.5421 12.1814 22.5394 12.193C22.5343 12.2162 22.5279 12.2387 22.5205 12.2607C22.5167 12.2709 22.513 12.2813 22.509 12.2915C22.4997 12.3164 22.4889 12.3405 22.4769 12.3639C22.4739 12.3692 22.4708 12.3751 22.4675 12.381C22.4331 12.4443 22.39 12.5015 22.3398 12.5517L22.3384 12.5527L19.4104 15.4687C19.1169 15.761 18.642 15.76 18.3498 15.4665C18.084 15.1997 18.0607 14.783 18.2791 14.4898L18.3519 14.4059L19.991 12.7705L9.76847 12.7714C9.35426 12.7714 9.01847 12.4356 9.01847 12.0214C9.01847 11.6417 9.30063 11.3279 9.6667 11.2782L9.76847 11.2714L19.993 11.2705L18.352 9.63779C18.0852 9.37212 18.06 8.95551 18.2772 8.66142L18.3497 8.57714C18.6153 8.31028 19.0319 8.28514 19.326 8.50234Z"
          fill="currentColor"
        />
      </svg>
    ),
  };

  const setting = {
    link: '/admin/setting',
    name: 'setting',
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.6161 2C13.3251 1.99971 14.0041 2.28061 14.4983 2.77871C14.9925 3.27681 15.2599 3.94968 15.2383 4.57766L15.2468 4.72535C15.2641 4.87079 15.3124 5.01116 15.3908 5.14054C15.5435 5.39567 15.7935 5.58081 16.0857 5.65514C16.3779 5.72947 16.6882 5.68688 16.9821 5.51839L17.146 5.4355C18.3759 4.86897 19.8511 5.31918 20.5333 6.47928L21.1465 7.52174C21.1627 7.54922 21.1769 7.57762 21.1892 7.60674L21.2461 7.71842C21.7945 8.86519 21.4043 10.2293 20.3624 10.9223L20.1051 11.0807C19.9706 11.1726 19.8585 11.2926 19.7742 11.4368C19.6218 11.6929 19.58 11.998 19.658 12.2844C19.736 12.5708 19.9272 12.8149 20.2174 12.9793L20.3843 13.0841C20.8887 13.4297 21.253 13.9391 21.4119 14.523C21.5912 15.1817 21.495 15.8833 21.1399 16.4804L20.4803 17.557L20.3808 17.7089C19.6058 18.8008 18.1011 19.1344 16.9527 18.485L16.8166 18.4163C16.6746 18.3541 16.5214 18.3199 16.382 18.316C16.0786 18.3146 15.7872 18.432 15.5727 18.6422C15.3582 18.8524 15.2383 19.1379 15.2391 19.4698L15.231 19.6414C15.12 20.9703 13.9845 22 12.6164 22H11.3811C9.93219 22 8.75765 20.8493 8.75912 19.4753L8.75063 19.3277C8.73337 19.1822 8.68504 19.0418 8.6027 18.9057C8.45336 18.65 8.20591 18.4633 7.91538 18.3871C7.62484 18.3109 7.31529 18.3516 7.01565 18.5213L6.83762 18.6084C6.2746 18.8565 5.63953 18.9023 5.04445 18.7366C4.37306 18.5497 3.80539 18.1083 3.47412 17.5224L2.83679 16.4442L2.75197 16.2844C2.17157 15.0841 2.62651 13.6412 3.78115 12.9875L3.88645 12.9228C4.19491 12.7137 4.37987 12.3688 4.37987 12C4.37987 11.599 4.16149 11.2284 3.77948 11.0115L3.62449 10.9141C2.51001 10.1548 2.16949 8.68049 2.85989 7.50696L3.50918 6.46166C4.23128 5.23376 5.83155 4.81017 7.06235 5.50171L7.19559 5.5713C7.33141 5.63238 7.47895 5.6648 7.62101 5.66628C8.24742 5.66634 8.75775 5.17352 8.76724 4.54181L8.77575 4.3478C8.82704 3.74716 9.09307 3.1827 9.52796 2.75457C10.0186 2.27155 10.6855 2 11.3811 2H12.6161ZM12.6164 3.44774H11.3811C11.0786 3.44774 10.7887 3.56581 10.5753 3.77582C10.3863 3.96196 10.2706 4.20741 10.2503 4.43661L10.2368 4.7415C10.1334 6.07087 8.99969 7.11416 7.61326 7.11398C7.25588 7.11034 6.90355 7.03293 6.54427 6.87026L6.3519 6.77085C5.8038 6.46315 5.1049 6.64815 4.78057 7.19925L4.13128 8.24455C3.83377 8.75044 3.98256 9.39466 4.44324 9.70925L4.70395 9.871C5.42196 10.3467 5.85754 11.1429 5.85754 12C5.85754 12.8446 5.43413 13.634 4.70219 14.1296L4.54639 14.2256C4.03354 14.5163 3.83562 15.144 4.07398 15.6383L4.13027 15.7449L4.75952 16.8084C4.90728 17.0696 5.1552 17.2624 5.44842 17.344C5.70831 17.4164 5.98569 17.3964 6.20208 17.3018L6.3108 17.2497C6.91096 16.9066 7.62614 16.8126 8.29737 16.9886C8.96861 17.1645 9.54028 17.5959 9.87937 18.1768C10.0618 18.478 10.1772 18.8132 10.2219 19.1985L10.2421 19.552C10.3043 20.1145 10.7905 20.5523 11.3811 20.5523H12.6164C13.2137 20.5523 13.7099 20.1023 13.7565 19.5511L13.7621 19.4421C13.7588 18.7585 14.0345 18.1019 14.5279 17.6185C15.0212 17.1351 15.6914 16.865 16.4053 16.8686C16.7556 16.8778 17.1004 16.9547 17.4528 17.11L17.7687 17.2682C18.2647 17.4814 18.8529 17.3258 19.1511 16.9067L19.2236 16.7957L19.868 15.7436C20.0203 15.4875 20.0621 15.1824 19.9841 14.896C19.915 14.6422 19.7566 14.4207 19.5645 14.2882L19.2922 14.1195C18.7716 13.7748 18.3932 13.2563 18.2302 12.6574C18.0509 11.9987 18.1471 11.2971 18.4946 10.7126C18.6849 10.3872 18.9464 10.1073 19.2873 9.87532L19.448 9.77613C19.9601 9.4827 20.1578 8.85504 19.9212 8.35884L19.8505 8.22529L19.8378 8.19726L19.253 7.20208C18.9764 6.73175 18.4008 6.52853 17.9125 6.6891L17.8015 6.73265L17.6983 6.78415C17.1001 7.12941 16.3863 7.22736 15.7143 7.05641C15.0423 6.88546 14.4673 6.45965 14.1181 5.87616C13.9357 5.57504 13.8203 5.23984 13.7756 4.85454L13.7624 4.60249C13.7713 4.29923 13.6546 4.00536 13.4387 3.78783C13.2229 3.57029 12.9264 3.44774 12.6164 3.44774ZM12.0032 8.73182C13.8455 8.73182 15.339 10.195 15.339 12C15.339 13.805 13.8455 15.2682 12.0032 15.2682C10.161 15.2682 8.66748 13.805 8.66748 12C8.66748 10.195 10.161 8.73182 12.0032 8.73182ZM12.0032 10.1796C10.977 10.1796 10.1452 10.9946 10.1452 12C10.1452 13.0054 10.977 13.8204 12.0032 13.8204C13.0294 13.8204 13.8613 13.0054 13.8613 12C13.8613 10.9946 13.0294 10.1796 12.0032 10.1796Z"
          fill="currentColor"
        />
      </svg>
    ),
  };
  const edit = {
    link: '#',
    name: 'edit',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.3415 19.2089C20.7052 19.2089 21 19.498 21 19.8545C21 20.1813 20.7523 20.4514 20.4308 20.4941L20.3415 20.5H13.471C13.1073 20.5 12.8125 20.211 12.8125 19.8545C12.8125 19.5277 13.0602 19.2576 13.3816 19.2148L13.471 19.2089H20.3415ZM13.6592 4.41662C14.906 3.19446 16.9283 3.19446 18.175 4.41662L19.4694 5.6854C20.7162 6.90755 20.7162 8.88985 19.4694 10.112L9.74061 19.6486C9.1843 20.1939 8.43007 20.4999 7.64282 20.4999H3.65854C3.28841 20.4999 2.99098 20.201 3.00021 19.8383L3.10043 15.8975C3.12036 15.1526 3.43127 14.4425 3.96867 13.9157L13.6592 4.41662ZM12.906 6.979L4.89998 14.8287C4.60126 15.1215 4.42814 15.5169 4.41707 15.9305L4.33345 19.2084L7.64282 19.2088C8.03222 19.2088 8.4067 19.0745 8.70228 18.8317L8.8093 18.7357L16.855 10.849L12.906 6.979ZM17.2437 5.32953C16.5113 4.61156 15.323 4.61156 14.5905 5.32953L13.838 6.066L17.786 9.936L18.5381 9.19909C19.2298 8.52101 19.2683 7.44433 18.6534 6.72195L18.5381 6.59831L17.2437 5.32953Z"
          fill="currentColor"
        />
      </svg>
    ),
  };
  const dashboard = {
    link: '/admin/dashboard',
    name: 'dashboard',
    icon: (
      <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.4978 6.7606C10.5855 6.93485 10.6382 7.12392 10.6533 7.32102L11.0419 12.8095C11.0471 12.8847 11.0827 12.9548 11.1409 13.0042C11.1845 13.0413 11.2381 13.0645 11.298 13.0712L11.3599 13.0724L16.9341 12.7366C17.3867 12.71 17.8305 12.8675 18.1604 13.1719C18.4902 13.4763 18.6768 13.9004 18.6744 14.3912C18.4265 18.0037 15.773 21.0237 12.159 21.8065C8.54503 22.5893 4.83611 20.9474 3.05781 17.7848C2.58229 16.9695 2.26178 16.0778 2.1138 15.1749L2.06643 14.8359C2.0253 14.5821 2.00319 14.3257 2 14.0795L2.00311 13.8372C2.0134 10.0655 4.66156 6.80403 8.38809 5.92434L8.64383 5.86807L8.7814 5.84532C9.502 5.74681 10.211 6.12453 10.4978 6.7606ZM9.01643 7.27813L8.93217 7.28772L8.70369 7.33933C5.73526 8.05477 3.6062 10.6103 3.48796 13.621L3.4828 13.8661C3.47569 14.0525 3.4825 14.2392 3.50499 14.4378L3.53277 14.6408C3.63212 15.495 3.90795 16.3206 4.34914 17.0772C5.81632 19.6863 8.86669 21.0367 11.839 20.3929C14.8113 19.7491 16.9936 17.2653 17.1958 14.3414C17.1958 14.2974 17.1774 14.2552 17.1446 14.225C17.1228 14.2049 17.0959 14.1912 17.0675 14.1851L17.024 14.1817L11.459 14.5169C10.9894 14.5503 10.5255 14.3992 10.17 14.0971C9.81456 13.7951 9.59684 13.3669 9.56522 12.91L9.17702 7.42617C9.17632 7.41708 9.17385 7.40822 9.15682 7.37299C9.1315 7.31695 9.07648 7.28131 9.01643 7.27813ZM13.423 2.00105C17.7084 2.12227 21.3029 5.20162 21.9904 9.34084L22 9.4567L21.9977 9.65855C21.9737 9.95621 21.8538 10.2393 21.6545 10.4668C21.4041 10.7524 21.0477 10.9286 20.6588 10.9567L14.0133 11.39C13.1615 11.4382 12.4295 10.8051 12.3741 9.97348L11.9299 3.44914L11.9349 3.30295L11.957 3.13824C12.0162 2.84619 12.1684 2.57938 12.3925 2.37643C12.6739 2.12156 13.0474 1.98661 13.423 2.00105ZM13.4113 3.44902L13.8511 9.87814C13.8537 9.91719 13.888 9.94688 13.9214 9.94502L20.5182 9.51352L20.4854 9.33352C19.8318 6.0802 17.0119 3.66443 13.6287 3.45932L13.4113 3.44902Z"
          fill="currentColor"
        />
      </svg>
    ),
  };
  const search = {
    link: '#',
    name: 'Search',
    icon: (
      <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.16667 9.66667C4.16667 6.90917 6.40917 4.66667 9.16667 4.66667C11.9242 4.66667 14.1667 6.90917 14.1667 9.66667C14.1667 12.4242 11.9242 14.6667 9.16667 14.6667C6.40917 14.6667 4.16667 12.4242 4.16667 9.66667ZM17.2558 16.5775L14.4267 13.7475C15.3042 12.6192 15.8333 11.205 15.8333 9.66667C15.8333 5.99083 12.8425 3 9.16667 3C5.49083 3 2.5 5.99083 2.5 9.66667C2.5 13.3425 5.49083 16.3333 9.16667 16.3333C10.705 16.3333 12.1192 15.8042 13.2475 14.9267L16.0775 17.7558C16.24 17.9183 16.4533 18 16.6667 18C16.88 18 17.0933 17.9183 17.2558 17.7558C17.5817 17.43 17.5817 16.9033 17.2558 16.5775Z"
          fill="white"
        />
        {/* <mask
          id="mask0_415_5535"
          style="mask-type:alpha"
          maskUnits="userSpaceOnUse"
          x="2"
          y="3"
          width="16"
          height="15"
        > */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.16667 9.66667C4.16667 6.90917 6.40917 4.66667 9.16667 4.66667C11.9242 4.66667 14.1667 6.90917 14.1667 9.66667C14.1667 12.4242 11.9242 14.6667 9.16667 14.6667C6.40917 14.6667 4.16667 12.4242 4.16667 9.66667ZM17.2558 16.5775L14.4267 13.7475C15.3042 12.6192 15.8333 11.205 15.8333 9.66667C15.8333 5.99083 12.8425 3 9.16667 3C5.49083 3 2.5 5.99083 2.5 9.66667C2.5 13.3425 5.49083 16.3333 9.16667 16.3333C10.705 16.3333 12.1192 15.8042 13.2475 14.9267L16.0775 17.7558C16.24 17.9183 16.4533 18 16.6667 18C16.88 18 17.0933 17.9183 17.2558 17.7558C17.5817 17.43 17.5817 16.9033 17.2558 16.5775Z"
          fill="white"
        />
        {/* </mask>
        <g mask="url(#mask0_415_5535)">
          <rect y="0.5" width="20" height="20" fill="white" />
        </g> */}
      </svg>
    ),
  };

  return {
    home,
    account,
    menu,
    takeAway,
    trash,
    order,
    cancel,
    cart,
    order2,
    deliveryMan,
    home2,
    notification,
    signOut,
    search,
    setting,
    dashboard,
    edit,
  };
};

export default useIcons;