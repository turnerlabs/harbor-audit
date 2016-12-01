#!/bin/bash

typeset -i tests_run=0
function try { this="$1"; }
trap 'printf "$0: exit code $? on line $LINENO\nFAIL: $this\n"; exit 1' ERR
function assert {
  let tests_run+=1
  [ "$1" = "$2" ] && { echo -n "."; return; }
  printf "\nFAIL: $this\n'$1' != '$2'\n"; exit 1
}

HEALTH_CHECK=http://localhost/health

try "verify health check returns a 200 status code"
out=$(curl --write-out %{http_code} --silent --output /dev/null $HEALTH_CHECK)
assert "200" "$out"

echo
echo "PASS: $tests_run tests run"
