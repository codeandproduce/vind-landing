docker run \
	-d -v /root/vind-landing/:/src \
	-w /src \
	-e PORT=1234 \
	-p 1234:1234 \
	ornt-node
