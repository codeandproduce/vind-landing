docker run \
	-d -v /root/chanwookim/:/src \
	-w /src \
	-e PORT=3000 \
	-p 3000:3000 \
	ornt-node
