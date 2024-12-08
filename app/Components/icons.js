import React from 'react';

export const SearchIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" fill="white" style={{ mixBlendMode: 'multiply' }} />
      <path
        d="M21.7499 20.6894L16.0859 15.0254C17.4469 13.3914 18.1256 11.2956 17.9808 9.17395C17.8359 7.05231 16.8787 5.06819 15.3082 3.63434C13.7378 2.20048 11.675 1.42729 9.54894 1.4756C7.42292 1.52391 5.39736 2.39001 3.89365 3.89372C2.38993 5.39744 1.52384 7.42299 1.47552 9.54902C1.42721 11.675 2.20041 13.7378 3.63426 15.3083C5.06812 16.8788 7.05224 17.836 9.17387 17.9808C11.2955 18.1257 13.3913 17.447 15.0253 16.0859L20.6894 21.75L21.7499 20.6894ZM2.99993 9.75001C2.99993 8.41499 3.39581 7.10994 4.13751 5.99991C4.87921 4.88988 5.93342 4.02471 7.16682 3.51382C8.40022 3.00293 9.75742 2.86926 11.0668 3.12971C12.3762 3.39016 13.5789 4.03303 14.5229 4.97704C15.4669 5.92104 16.1098 7.12378 16.3702 8.43315C16.6307 9.74252 16.497 11.0997 15.9861 12.3331C15.4752 13.5665 14.6101 14.6207 13.5 15.3624C12.39 16.1041 11.085 16.5 9.74993 16.5C7.96033 16.498 6.2446 15.7862 4.97916 14.5208C3.71371 13.2553 3.00192 11.5396 2.99993 9.75001Z"
        fill="#2A254B"
      />
    </svg>
  );
};

export const CartIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" fill="white" style={{ mixBlendMode: 'multiply' }} />
      <path
        d="M7.5 22.5C8.32843 22.5 9 21.8285 9 21C9 20.1716 8.32843 19.5 7.5 19.5C6.67157 19.5 6 20.1716 6 21C6 21.8285 6.67157 22.5 7.5 22.5Z"
        fill="#2A254B"
      />
      <path
        d="M18 22.5C18.8284 22.5 19.5 21.8285 19.5 21C19.5 20.1716 18.8284 19.5 18 19.5C17.1716 19.5 16.5 20.1716 16.5 21C16.5 21.8285 17.1716 22.5 18 22.5Z"
        fill="#2A254B"
      />
      <path
        d="M21 5.25003H4.365L3.75 2.10003C3.71494 1.92807 3.62068 1.77386 3.48364 1.66423C3.3466 1.5546 3.17546 1.49649 3 1.50003H0V3.00003H2.385L5.25 17.4C5.28506 17.572 5.37932 17.7262 5.51636 17.8358C5.6534 17.9455 5.82454 18.0036 6 18H19.5V16.5H6.615L6 13.5H19.5C19.6734 13.5043 19.8429 13.4483 19.9796 13.3416C20.1163 13.235 20.2119 13.0842 20.25 12.915L21.75 6.16503C21.7751 6.05375 21.7745 5.9382 21.7483 5.82718C21.722 5.71616 21.6708 5.61259 21.5985 5.52436C21.5261 5.43613 21.4347 5.36556 21.3309 5.31802C21.2272 5.27048 21.114 5.24723 21 5.25003ZM18.9 12H5.715L4.665 6.75003H20.0625L18.9 12Z"
        fill="#2A254B"
      />
    </svg>
  );
};


export const UserIcon = ({ width = 24, height = 24, fill = "#2A254B" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" fill="white" style={{ mixBlendMode: "multiply" }} />
      <path
        d="M12 6C11.2583 6 10.5333 6.21993 9.91662 6.63199C9.29993 7.04404 8.81928 7.62971 8.53546 8.31494C8.25163 9.00016 8.17736 9.75416 8.32206 10.4816C8.46675 11.209 8.82391 11.8772 9.34835 12.4017C9.8728 12.9261 10.541 13.2833 11.2684 13.4279C11.9958 13.5726 12.7498 13.4984 13.4351 13.2145C14.1203 12.9307 14.706 12.4501 15.118 11.8334C15.5301 11.2167 15.75 10.4917 15.75 9.75C15.75 8.75544 15.3549 7.80161 14.6517 7.09835C13.9484 6.39509 12.9946 6 12 6ZM12 12C11.555 12 11.12 11.868 10.75 11.6208C10.38 11.3736 10.0916 11.0222 9.92128 10.611C9.75098 10.1999 9.70642 9.7475 9.79324 9.31105C9.88005 8.87459 10.0943 8.47368 10.409 8.15901C10.7237 7.84434 11.1246 7.63005 11.5611 7.54323C11.9975 7.45642 12.4499 7.50097 12.861 7.67127C13.2722 7.84157 13.6236 8.12996 13.8708 8.49997C14.118 8.86998 14.25 9.30499 14.25 9.75C14.2493 10.3465 14.0121 10.9184 13.5903 11.3402C13.1684 11.7621 12.5965 11.9993 12 12Z"
        fill={fill}
      />
      <path
        d="M12 1.5C9.9233 1.5 7.89323 2.11581 6.16652 3.26957C4.4398 4.42332 3.09399 6.0632 2.29927 7.98182C1.50455 9.90045 1.29661 12.0116 1.70176 14.0484C2.1069 16.0852 3.10693 17.9562 4.57538 19.4246C6.04383 20.8931 7.91476 21.8931 9.95156 22.2982C11.9884 22.7034 14.0996 22.4955 16.0182 21.7007C17.9368 20.906 19.5767 19.5602 20.7304 17.8335C21.8842 16.1068 22.5 14.0767 22.5 12C22.4969 9.21619 21.3896 6.5473 19.4212 4.57884C17.4527 2.61039 14.7838 1.50314 12 1.5ZM7.5 19.7824V18.75C7.50066 18.1535 7.73792 17.5815 8.15974 17.1597C8.58155 16.7379 9.15347 16.5007 9.75 16.5H14.25C14.8465 16.5007 15.4185 16.7379 15.8403 17.1597C16.2621 17.5815 16.4993 18.1535 16.5 18.75V19.7824C15.1344 20.5798 13.5814 21 12 21C10.4186 21 8.86563 20.5798 7.5 19.7824ZM17.9944 18.6944C17.9795 17.7105 17.5786 16.772 16.8782 16.0809C16.1778 15.3899 15.2339 15.0017 14.25 15H9.75C8.76608 15.0017 7.8222 15.3899 7.1218 16.0809C6.42139 16.772 6.02054 17.7105 6.00563 18.6944C4.64555 17.4799 3.68643 15.881 3.25526 14.1093C2.82408 12.3377 2.9412 10.4769 3.59111 8.77324C4.24101 7.06963 5.39304 5.6036 6.89466 4.56927C8.39627 3.53495 10.1766 2.98112 12 2.98112C13.8234 2.98112 15.6037 3.53495 17.1054 4.56927C18.607 5.6036 19.759 7.06963 20.4089 8.77324C21.0588 10.4769 21.1759 12.3377 20.7448 14.1093C20.3136 15.881 19.3545 17.4799 17.9944 18.6944Z"
        fill={fill}
      />
    </svg>
  );
};
export const DeliveryIcon = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="24" height="24" fill="white" style={{ mixBlendMode: 'multiply' }} />
      <path d="M12 12H3V13.5H12V12Z" fill="#2A254B" />
      <path d="M9 8.25H1.5V9.75H9V8.25Z" fill="#2A254B" />
      <path
        d="M22.4392 12.4548L20.1892 7.2048C20.1315 7.06979 20.0355 6.95469 19.9129 6.87383C19.7904 6.79297 19.6468 6.74991 19.5 6.75H17.25V5.25C17.25 5.05109 17.171 4.86032 17.0303 4.71967C16.8897 4.57902 16.6989 4.5 16.5 4.5H4.5V6H15.75V15.4172C15.4083 15.6156 15.1092 15.8797 14.8701 16.1943C14.6309 16.5089 14.4564 16.8677 14.3566 17.25H9.64342C9.46088 16.543 9.02675 15.9269 8.42242 15.517C7.81809 15.1072 7.08504 14.9319 6.36067 15.0239C5.63631 15.1159 4.97038 15.4689 4.48768 16.0168C4.00499 16.5647 3.73869 17.2698 3.73869 18C3.73869 18.7302 4.00499 19.4353 4.48768 19.9832C4.97038 20.5311 5.63631 20.8841 6.36067 20.9761C7.08504 21.0681 7.81809 20.8928 8.42242 20.483C9.02675 20.0731 9.46088 19.457 9.64342 18.75H14.3566C14.5201 19.3933 14.8934 19.9638 15.4174 20.3712C15.9414 20.7787 16.5862 20.9999 17.25 20.9999C17.9138 20.9999 18.5586 20.7787 19.0826 20.3712C19.6066 19.9638 19.9799 19.3933 20.1434 18.75H21.75C21.9489 18.75 22.1397 18.671 22.2803 18.5303C22.421 18.3897 22.5 18.1989 22.5 18V12.75C22.5 12.6485 22.4793 12.548 22.4392 12.4548ZM6.75 19.5C6.45333 19.5 6.16332 19.412 5.91665 19.2472C5.66997 19.0824 5.47771 18.8481 5.36418 18.574C5.25065 18.2999 5.22094 17.9983 5.27882 17.7074C5.3367 17.4164 5.47956 17.1491 5.68934 16.9393C5.89912 16.7296 6.16639 16.5867 6.45736 16.5288C6.74834 16.4709 7.04994 16.5006 7.32403 16.6142C7.59811 16.7277 7.83238 16.92 7.9972 17.1666C8.16203 17.4133 8.25 17.7033 8.25 18C8.24954 18.3977 8.09136 18.779 7.81016 19.0602C7.52895 19.3414 7.14768 19.4995 6.75 19.5ZM17.25 8.25H19.0056L20.6129 12H17.25V8.25ZM17.25 19.5C16.9533 19.5 16.6633 19.412 16.4166 19.2472C16.17 19.0824 15.9777 18.8481 15.8642 18.574C15.7506 18.2999 15.7209 17.9983 15.7788 17.7074C15.8367 17.4164 15.9796 17.1491 16.1893 16.9393C16.3991 16.7296 16.6664 16.5867 16.9574 16.5288C17.2483 16.4709 17.5499 16.5006 17.824 16.6142C18.0981 16.7277 18.3324 16.92 18.4972 17.1666C18.662 17.4133 18.75 17.7033 18.75 18C18.7495 18.3977 18.5914 18.779 18.3102 19.0602C18.0289 19.3414 17.6477 19.4995 17.25 19.5ZM21 17.25H20.1434C19.9782 16.6076 19.6045 16.0382 19.0808 15.631C18.5572 15.2239 17.9133 15.0019 17.25 15V13.5H21V17.25Z"
        fill="#2A254B"
      />
    </svg>
  );
};
export function QualityIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" fill="white" style={{ mixBlendMode: 'multiply' }} />
      <path
        d="M10.5 16.0605L6.75 12.3097L7.80976 11.25L10.5 13.9395L16.1888 8.25L17.25 9.31125L10.5 16.0605Z"
        fill="#2A254B"
      />
      <path
        d="M12 1.5C9.9233 1.5 7.89323 2.11581 6.16652 3.26957C4.4398 4.42332 3.09399 6.0632 2.29927 7.98182C1.50455 9.90045 1.29661 12.0116 1.70176 14.0484C2.1069 16.0852 3.10693 17.9562 4.57538 19.4246C6.04383 20.8931 7.91476 21.8931 9.95156 22.2982C11.9884 22.7034 14.0996 22.4955 16.0182 21.7007C17.9368 20.906 19.5767 19.5602 20.7304 17.8335C21.8842 16.1068 22.5 14.0767 22.5 12C22.5 9.21523 21.3938 6.54451 19.4246 4.57538C17.4555 2.60625 14.7848 1.5 12 1.5ZM12 21C10.22 21 8.47992 20.4722 6.99987 19.4832C5.51983 18.4943 4.36628 17.0887 3.68509 15.4442C3.0039 13.7996 2.82567 11.99 3.17294 10.2442C3.5202 8.49836 4.37737 6.89471 5.63604 5.63604C6.89472 4.37737 8.49836 3.5202 10.2442 3.17293C11.99 2.82567 13.7996 3.0039 15.4442 3.68508C17.0887 4.36627 18.4943 5.51983 19.4832 6.99987C20.4722 8.47991 21 10.22 21 12C21 14.3869 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.387 21 12 21Z"
        fill="#2A254B"
      />
    </svg>
  );
}
export  function PriceCardIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" fill="white" style={{ mixBlendMode: 'multiply' }} />
      <path
        d="M21 4.5H3C2.60218 4.5 2.22064 4.65804 1.93934 4.93934C1.65804 5.22064 1.5 5.60218 1.5 6V18C1.5 18.3978 1.65804 18.7794 1.93934 19.0607C2.22064 19.342 2.60218 19.5 3 19.5H21C21.3978 19.5 21.7794 19.342 22.0607 19.0607C22.342 18.7794 22.5 18.3978 22.5 18V6C22.5 5.60218 22.342 5.22064 22.0607 4.93934C21.7794 4.65804 21.3978 4.5 21 4.5ZM21 6V8.25H3V6H21ZM3 18V9.75H21V18H3Z"
        fill="#2A254B"
      />
      <path d="M12 15H4.5V16.5H12V15Z" fill="#2A254B" />
    </svg>
  );
}
export function RecycleIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="24" height="24" fill="white" style={{ mixBlendMode: 'multiply' }} />
      <path
        d="M18.75 1.5C17.0878 1.50275 15.4651 2.00708 14.0942 2.94704C12.7232 3.887 11.6679 5.21881 11.0662 6.7683C10.5841 6.06903 9.93949 5.49727 9.18767 5.10216C8.43584 4.70705 7.59932 4.50041 6.75 4.5H4.5V6.75C4.50155 8.14191 5.05517 9.47637 6.0394 10.4606C7.02363 11.4448 8.35809 11.9985 9.75 12H10.5V18.787C8.7773 18.9554 7.16718 19.7191 5.94675 20.9465L7.00725 22.0071C7.63464 21.3798 8.39333 20.8995 9.22869 20.6006C10.064 20.3018 10.9553 20.192 11.8382 20.279C12.7211 20.3661 13.5737 20.6478 14.3347 21.104C15.0956 21.5602 15.7459 22.1794 16.2387 22.9172L17.4849 22.0826C16.8701 21.1638 16.0593 20.3926 15.111 19.8244C14.1626 19.2562 13.1002 18.9052 12 18.7965V12H12.75C14.9373 11.9975 17.0343 11.1275 18.5809 9.58089C20.1275 8.03425 20.9975 5.93727 21 3.75V1.5H18.75ZM9.75 10.5C8.75579 10.4989 7.80262 10.1034 7.0996 9.4004C6.39658 8.69738 6.00113 7.74421 6 6.75V6H6.75C7.74423 6.00107 8.69744 6.3965 9.40047 7.09953C10.1035 7.80256 10.4989 8.75577 10.5 9.75V10.5H9.75ZM19.5 3.75C19.498 5.5396 18.7862 7.25534 17.5208 8.52078C16.2553 9.78622 14.5396 10.498 12.75 10.5H12V9.75C12.002 7.9604 12.7138 6.24466 13.9792 4.97922C15.2447 3.71378 16.9604 3.00199 18.75 3H19.5V3.75Z"
        fill="#2A254B"
      />
    </svg>
  );
}