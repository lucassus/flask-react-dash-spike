dev:
	foreman start --procfile Procfile.local

# Formatting

format-isort:
	python -m isort .

format-black:
	python -m black .

format-remove-imports:
	autoflake --recursive . --exclude venv,frontend,.git --remove-all-unused-imports --in-place

format: format-remove-imports format-isort format-black

# Linting

check-types:
	python -m mypy .

check-flake8:
	python -m flake8 .

check-isort:
	python -m isort . --check-only

check-black:
	python -m black . --check

lint: check-types check-flake8 check-isort check-black
