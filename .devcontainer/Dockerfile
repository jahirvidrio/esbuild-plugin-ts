FROM node:18.20.4-bookworm

# ! Argumentos
ARG USERNAME=node


# ! Pasar agumentos a variables de entorno para poder usarlos dentro del contenedor
ENV USERNAME=${USERNAME}


# ! Instalación de dependencias
RUN apt-get update && apt-get upgrade -y \
    && apt-get install -y sudo git man locales bash-completion

RUN npm install --global npm


# ! Configuración de idioma
RUN sed -i -e 's/# en_US.UTF-8 UTF-8/en_US.UTF-8 UTF-8/' /etc/locale.gen
RUN locale-gen en_US.UTF-8
ENV LANG en_US.UTF-8
ENV LC_ALL en_US.UTF-8


# ! Creación de usuario
RUN if [ "$USERNAME" != "node" ] ; then userdel node && useradd --create-home --shell=/bin/bash "$USERNAME" ; fi \
    && echo "$USERNAME ALL=(ALL) NOPASSWD:ALL" > "/etc/sudoers.d/$USERNAME" \
    && chmod 0440 "/etc/sudoers.d/$USERNAME"


# ! Definir usuario
USER $USERNAME
