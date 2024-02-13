#!/usr/bin/env sh

# abort on errors
set -e

# build
ng build --configuration=production --base-href="/"

# navigate into the build output directory
cd dist/resume-hub

# if you are deploying to a custom domain
 echo 'www.resume.eduardovaz.dev' > CNAME

cd -

angular-cli-ghpages --dir=dist/resume-hub
