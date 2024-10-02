import React, { useState } from "react";
import { View } from "react-native";
import { ListItem, Icon, Text } from "@rneui/base";
import { Modal } from "../Shared/Modal/Modal";
import { ChangeDisplayNameForm } from "../../components/Account/ChangeDisplayNameForm";

export function AccountOption() {
  const [showModal, setShowModal] = useState(false);
  const [renderComponent, setRenderComponent] = useState(null);

  const onOpenCloseModal = () => setShowModal((prevState) => !prevState);

  const selectedComponent = (key) => {
    if (key === "displayName") {
      setRenderComponent(
        <ChangeDisplayNameForm close={onOpenCloseModal}>
        </ChangeDisplayNameForm>
      );
    }
    if (key === "email") {
      setRenderComponent(<Text>Cambiar Email</Text>);
    }
    if (key === "password") {
      setRenderComponent(<Text>Cambiar password</Text>);
    }
    onOpenCloseModal();
  };

  const menuOptions = getMenuOptions(selectedComponent);

  return (
    <View>
      {menuOptions.map((menu, index) => (
        <ListItem key={index} bottomDivider onPress={menu.onPress}>
          <Icon
            type={menu.iconType}
            name={menu.iconNameLeft}
            color={menu.iconColorLeft}
          />
          <ListItem.Content>
            <ListItem.Title>{menu.title}</ListItem.Title>
          </ListItem.Content>
          <Icon
            type={menu.iconType}
            name={menu.iconNameRight}
            color={menu.iconColorRight}
          />
        </ListItem>
      ))}
      <Modal show={showModal} close={onOpenCloseModal}>
        {renderComponent}
      </Modal>
    </View>
  );
}

function getMenuOptions(selectedComponent) {
  return [
    {
      title: "Cambiar Nombre y Apellido",
      iconType: "material-community",
      iconNameLeft: "account-circle",
      iconColorLeft: "#CCC",
      iconNameRight: "chevron-right",
      iconColorRight: "#CCC",
      onPress: () => {
        selectedComponent("displayName");
      },
    },
    {
      title: "Cambiar Email",
      iconType: "material-community",
      iconNameLeft: "at",
      iconColorLeft: "#CCC",
      iconNameRight: "chevron-right",
      iconColorRight: "#CCC",
      onPress: () => {
        selectedComponent("email");
      },
    },
    {
      title: "Cambiar Contraseña",
      iconType: "material-community",
      iconNameLeft: "lock-reset",
      iconColorLeft: "#CCC",
      iconNameRight: "chevron-right",
      iconColorRight: "#CCC",
      onPress: () => {
        selectedComponent("password");
      },
    },
  ];
}
