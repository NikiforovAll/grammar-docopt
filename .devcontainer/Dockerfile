FROM ghcr.io/nikiforovall/devcontainers/antlr:latest

ARG USERNAME=root

# [Option] Install Node.js
ARG INSTALL_NODE="true"
ENV NVM_DIR=/usr/local/share/nvm
ENV NVM_SYMLINK_CURRENT=true \
    PATH=${NVM_DIR}/current/bin:${PATH}
COPY node-debian.sh /tmp/library-scripts/
RUN if [ "${INSTALL_NODE}" = "true" ]; then apt-get update && bash /tmp/library-scripts/node-debian.sh "${NVM_DIR}"; fi

RUN npm install -g eslint typescript \
    && npm cache clean --force > /dev/null 2>&1
