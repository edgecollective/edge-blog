#!/bin/bash

convert $1 +dither -colors 5 -normalize $2 
