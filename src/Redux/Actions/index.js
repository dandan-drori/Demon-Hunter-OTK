export const toggleModal = (currentState) => {
  return { type: "TOGGLE_MODAL", payload: currentState };
};

export const openModal = () => {
  return { type: "OPEN_MODAL" };
};

export const closeModal = () => {
  return { type: "CLOSE_MODAL" };
};

export const nextModal = (currentModal) => {
  return { type: "NEXT_MODAL", payload: currentModal };
};
