# This file is used to build the Docker image for the application
# Please follow the instructions in the comments below
# to complete the Dockerfile
# DO NOT MODIFY THE COMMENTS BELOW (except for the line: --> Remove this line and write your code here)

# Arguments: NODE_VER - Node version to use
ARG NODE_VER=20

# TODO: Find the image and replace the "baseImage" string below
FROM baseImage:${NODE_VER}-alpine 

# Use production settings
ENV NODE_ENV=production

# TODO: Set the working directory
# --> Remove this line and write your code here

# Download and install dependencies
#   --offline: trigger an error if any required dependencies are not available in local cache
#   --frozen-lockfile: don't generate a lockfile and fail if an update is needed
#   --link-duplicates: create hardlinks to the repeated modules in node_modules
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=yarn.lock,target=yarn.lock \
    --mount=type=cache,target=/usr/local/share/.cache/yarn \
    yarn --frozen-lockfile --offline --link-duplicates

# TODO: Run the application command with the user node
# --> Remove this line and write your code here

# TODO: Copy the source code
# --> Remove this line and write your code here

# TODO: Expose the port
# --> Remove this line and write your code here

# TODO: Start the application
# --> Remove this line and write your code here