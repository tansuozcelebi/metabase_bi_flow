import type { ReactNode } from "react";
import { t } from "ttag";
import _ from "underscore";

import { Button, Flex, Modal, Text } from "metabase/ui";

interface ConfirmModal {
  opened: boolean | undefined;
  "data-testid"?: string;
  title: string | ReactNode;
  content?: string;
  message?: string | ReactNode;
  onClose?: () => void;
  onConfirm?: () => void;
  confirmButtonText?: string;
  confirmButtonPrimary?: boolean;
  closeButtonText?: string;
}

export const ConfirmModal = ({
  opened,
  "data-testid": dataTestId,
  title,
  content,
  message = t`Are you sure you want to do this?`,
  onClose = _.noop,
  onConfirm = _.noop,
  confirmButtonText = t`Yes`,
  confirmButtonPrimary = false,
  closeButtonText = t`Cancel`,
  ...props
}: ConfirmModal) => (
  <Modal
    data-testid={dataTestId}
    opened={Boolean(opened)}
    title={title}
    onClose={onClose}
    size="lg"
    {...props}
  >
    <Flex direction="column" gap="lg" mt="lg">
      {content ? <Text>{content}</Text> : null}
      <Text>{message}</Text>
      <Flex justify="flex-end" gap="md">
        <Button onClick={onClose}>{closeButtonText}</Button>
        <Button
          color={confirmButtonPrimary ? "primary" : "danger"}
          variant={confirmButtonPrimary ? "primary" : "filled"}
          onClick={onConfirm}
        >
          {confirmButtonText}
        </Button>
      </Flex>
    </Flex>
  </Modal>
);
