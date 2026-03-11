from __future__ import annotations

import os
from pathlib import Path
from typing import Any

from pydantic_settings import BaseSettings


class VoicePluginSettings(BaseSettings):
    home_dir: Path = Path.home() / ".amplifier-voice"

    model_config = {"env_prefix": "VOICE_PLUGIN_"}


def get_voice_config() -> dict[str, Any]:
    """Load voice config from environment, with safe defaults."""
    return {
        "voice": os.environ.get("AMPLIFIER_VOICE_VOICE", "marin"),
        "model": os.environ.get("AMPLIFIER_VOICE_MODEL", "gpt-realtime-1.5"),
        "instructions": os.environ.get("AMPLIFIER_VOICE_INSTRUCTIONS", ""),
        "assistant_name": os.environ.get("AMPLIFIER_VOICE_ASSISTANT_NAME", "Amplifier"),
        # Retention ratio for automatic context truncation (0.0 to 1.0).
        # When the context window fills, the oldest (1 - ratio) portion is
        # dropped in one chunk.  Default 0.8 = drop oldest 20% at a time.
        "retention_ratio": float(
            os.environ.get("AMPLIFIER_VOICE_RETENTION_RATIO", "0.8")
        ),
    }
