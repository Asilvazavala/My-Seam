import { Link } from "react-router-dom";
import {
  useDisclosure,
  Button,
  Modal,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import ItemDetail from "./ItemDetail/ItemDetail";
import DetailText from "./DetailText/DetailText";

export default function Detail({
  userId,
  handleEdition,
  handleDelete,
  details,
  InputHandler,
  SendCange,
  EditionPDetail,
  edit,
  image,
  ver
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      {ver ? (
        <div>
          <button onClick={handleEdition}>Habilitar Edición ✍</button>
          <Button onClick={onOpen}>Eliminar</Button>
          <Modal isOpen={isOpen}>
            <ModalContent>
              <ModalCloseButton />
              <ModalBody>
                Usted está a punto de eliminar este producto
              </ModalBody>
              <ModalFooter>
                <Button onClick={handleDelete}>
                  <Link
                    to="/home"
                    onClick={() => alert("Producto eliminado con exito")}
                  >
                    Eliminar
                  </Link>
                </Button>
                <Button onClick={onClose}>Cancelar</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
      ) : (
        ""
      )}
      <section>
        <article>
          <ItemDetail
            image={image}
            details={details}
          />
        </article>
      </section>
    </div>
  );
}
