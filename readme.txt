Manim Community v0.4.0
usage: manim file [flags] [scene [scene ...]]
       manim {cfg,init,plugins} [opts]

Animation engine for explanatory math videos

positional arguments:
  file                  Path to file holding the python code for the scene
  scene_names           Name of the Scene class you want to see

optional arguments:
  -h, --help            show this help message and exit
  -o OUTPUT_FILE, --output_file OUTPUT_FILE
                        Specify the name of the output file, if it should be
                        different from the scene class name
  -p, --preview         Automatically open the saved file once its done
  -f, --show_in_file_browser
                        Show the output file in the File Browser
  --sound               Play a success/failure sound
  --leave_progress_bars
                        Leave progress bars displayed in terminal
  -a, --write_all       Write all the scenes from a file
  -w, --write_to_movie  Render the scene as a movie file (this is on by
                        default)
  -s, --save_last_frame
                        Save the last frame only (no movie file is generated)
  -g, --save_pngs       Save each frame as a png
  -i, --save_as_gif     Save the video as gif
  --disable_caching     Disable caching (will generate partial-movie-files
                        anyway)
  --flush_cache         Remove all cached partial-movie-files
  --log_to_file         Log terminal output to file
  -c BACKGROUND_COLOR, --background_color BACKGROUND_COLOR
                        Specify background color
  --media_dir MEDIA_DIR
                        Directory to store media (including video files)
  --log_dir LOG_DIR     Directory to store log files
  --tex_template TEX_TEMPLATE
                        Specify a custom TeX template file
  --dry_run             Do a dry run (render scenes but generate no output
                        files)
  -t, --transparent     Render a scene with an alpha channel
  -q {k,p,h,m,l}, --quality {k,p,h,m,l}
                        Render at specific quality, short form of the
                        --*_quality flags
  --low_quality         Render at low quality
  --medium_quality      Render at medium quality
  --high_quality        Render at high quality
  --production_quality  Render at default production quality
  --fourk_quality       Render at 4K quality
  -l                    DEPRECATED: USE -ql or --quality l
  -m                    DEPRECATED: USE -qm or --quality m
  -e                    DEPRECATED: USE -qh or --quality h
  -k                    DEPRECATED: USE -qk or --quality k
  -r RESOLUTION, --resolution RESOLUTION
                        Resolution, passed as "height,width". Overrides the
                        -l, -m, -e, and -k flags, if present
  -n FROM_ANIMATION_NUMBER, --from_animation_number FROM_ANIMATION_NUMBER
                        Start rendering at the specified animation index,
                        instead of the first animation. If you pass in two
                        comma separated values, e.g. '3,6', it will end the
                        rendering at the second value
  --use_webgl_renderer  Render animations using the WebGL frontend
  --webgl_renderer_path WEBGL_RENDERER_PATH
                        Path to the WebGL frontend
  --webgl_updater_fps WEBGL_UPDATER_FPS
                        Frame rate to use when generating keyframe data for
                        animations that use updaters while using the WebGL
                        frontend
  --config_file CONFIG_FILE
                        Specify the configuration file
  --custom_folders      Use the folders defined in the [custom_folders]
                        section of the config file to define the output folder
                        structure
  -v {DEBUG,INFO,WARNING,ERROR,CRITICAL}, --verbosity {DEBUG,INFO,WARNING,ERROR,CRITICAL}
                        Verbosity level. Also changes the ffmpeg log level
                        unless the latter is specified in the config
  --version             Print the current version of Manim you are using
  --progress_bar True/False
                        Display the progress bar

Made with <3 by the ManimCommunity devs
