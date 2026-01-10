type Button = {
    text: string;
    action?: ((event?: React.SyntheticEvent) => void) | undefined;
    link: string;
    id: string;
};

type UserBoxProps = {
    buttons?: Button[];
    className?: string;
};

type AccountFormInput = {
    text: string;
    id: string;
};

type AccountFormField = {
    text?: string;
    group?: AccountFormInput[];
    id: string;
};

type AccountDetails = {
  fullName: {
      firstName: string;
      lastName: string;
  };
  email: string;
  password: string;
  confirmPassword: string;
};

export type { Button, UserBoxProps, AccountFormInput, AccountFormField, AccountDetails };